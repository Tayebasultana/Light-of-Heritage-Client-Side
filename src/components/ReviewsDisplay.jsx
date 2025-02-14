import React, { useEffect, useState } from "react";

const ReviewsDisplay = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://assignment-eleven-server-side-phi.vercel.app/user/reviews");
        const data = await response.json();
        setReviews(data);
        setLoading(false); 
      } catch (error) {
        setLoading(false); 
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-200 to-white p-5 text-center py-4 md:py-10">
      <h2 className="text-3xl font-bold pb-4">User Reviews</h2>
      {/* Loading Spinner */}
      {loading && (
        <div id="loadingSpinner" className="loading">
          <div className="spinner"></div> 
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {reviews.map((review, index) => (
        <div key={index} className=" card bg-blue-200 text-center py-4 border-b ">
          <p><strong>{review.userName}</strong></p>
          <p><strong>Rating:</strong> {review.rating} / 5</p>
          <p><strong>Review:</strong> {review.review.substring(0,30)}</p>
          <p><small>Posted on: {new Date(review.createdAt).toLocaleString()}</small></p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ReviewsDisplay;
