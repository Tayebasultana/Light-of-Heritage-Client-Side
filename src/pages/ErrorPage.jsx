import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#b9dee7] text-white">
      {/* Animation for the error */}
      <div className="relative text-center">
        <div className="text-9xl font-bold animate-bounce drop-shadow-md">404</div>
        <p className="mt-4 text-xl font-semibold animate-pulse">
          Oops! The page you are looking for doesn’t exist.
        </p>
      </div>

    
      {/* Navigation button */}
      <div className="mt-8">
        <NavLink
          className="bg-white text-green-800 px-7 py-2 rounded-lg font-medium shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          to="/"
        >
          Go to home page
        </NavLink>
      </div>
    </div>
  );
};

// Helper functions for random positions and delays
const randomPosition = () => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  return `top-[${top}%] left-[${left}%]`;
};

const randomDelay = () => {
  const delay = Math.random() * 3; // 0 to 3 seconds delay
  return `animation-delay-[${delay}s]`;
};

export default ErrorPage;
