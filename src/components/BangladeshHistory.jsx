import React from 'react';

const BangladeshHistory = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 bg-white dark:bg-[#1f1f1f] dark:text-white">
      {/* Image Section */}
      <div className="border-2 border-blue-300 p-2">
        <img
          src="https://i.ibb.co.com/M4hXmw6/the-history-of-bangladesh-l.jpg"
          alt="Bangladesh History"
          className="w-[400px] h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-xl">
        <h4 className="text-lg font-normal mb-2">
          WELCOME <span className="text-blue-700 dark:text-blue-300 font-bold">TO BANGLADESH History</span>
        </h4>
        <h1 className="text-4xl text-start dark:text-white md:text-[38px] font-extrabold mb-6 leading-snug">
          About The Glorious <br /> History Of Bangladesh
        </h1>
        <p className="text-base dark:text-gray-300 leading-relaxed mb-4">
          Bangladesh is a land of rich heritage and sacrifice. From the Language Movement in 1952 to the Liberation War in 1971, its history is built on courage, unity, and resilience.
        </p>
        <p className="text-base dark:text-gray-300 leading-relaxed mb-6">
          Our culture reflects the spirit of independence, and our people continue to thrive with pride and dignity. Bangladesh stands today as a symbol of freedom and hope.
        </p>
        <button className="btn btn-primary text-white font-bold py-3 px-6 rounded">
          EXPLORE
        </button>
      </div>
    </section>
  );
};

export default BangladeshHistory;
