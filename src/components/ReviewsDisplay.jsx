import React, { useEffect, useState } from "react";

const ReviewsDisplay = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/user/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-200 to-white p-5 text-center py-4 md:py-10">
      <h2 className="text-3xl font-bold pb-4">User Reviews</h2>
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
