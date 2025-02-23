import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Enter your email"
            />
            <button
              data-aos="fade-up"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all"
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-300">
            We promise not to spam you. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
