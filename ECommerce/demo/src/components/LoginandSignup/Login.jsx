import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative bg-white p-10 rounded-lg shadow-lg w-96">
        {/* Toggle Button Container */}
        <div className="relative w-full flex justify-between mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 font-semibold text-lg ${
              isLogin ? "text-white" : "text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 font-semibold text-lg ${
              !isLogin ? "text-white" : "text-gray-600"
            }`}
          >
            Signup
          </button>

          {/* Sliding Background Button */}
          <motion.div
            animate={{ x: isLogin ? 0 : "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-1/2 h-full bg-teal-600 rounded-lg"
          />
        </div>

        {/* Form */}
        {isLogin ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold text-center mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded mb-4"
            />
            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
              Login
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold text-center mb-4">Signup</h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded mb-4"
            />
            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
              Signup
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
