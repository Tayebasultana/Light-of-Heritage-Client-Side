import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const RatingAndReview = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [userName, setUserName] = useState("");
  const [reviews, setReviews] = useState([]);

  // Function to fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await fetch("https://assignment-eleven-server-side-phi.vercel.app/user/reviews");
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // Fetch reviews when the component is mounted
  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      rating,
      review: reviewText,
      userName: userName,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://assignment-eleven-server-side-phi.vercel.app/user/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        toast.success('Review submitted successfully!');
        setRating(0);
        setReviewText("");
        setUserName("");

        // Fetch updated reviews after submitting a new one
        fetchReviews();
      } else {
        alert("Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-black py-5 md:py-10 lg:py-16 text-center">
      <div className="bg-gray-800 border-2 rounded-lg border-gray-700 w-fit mx-auto  py-4 px-7">
        <h2 className="text-3xl font-bold text-white">Rate and Review</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 justify-items-center">

        <div>
          <input
            type="text"
            className="input input-info w-80 my-3"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

          <div className="rating py-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name="rating"
                className={`mask mask-star ${rating >= star ? "bg-yellow-500" : "bg-gray-300"}`}
                value={star}
                checked={rating === star}
                onChange={() => setRating(star)}
                required
              />
            ))}
          </div>
          <textarea
            className="textarea textarea-info"
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary mt-4">
            Post Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default RatingAndReview;
