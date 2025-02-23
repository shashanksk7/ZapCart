// import React from "react";

// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { FiShoppingBag } from "react-icons/fi";
// import { BiSolidUserCircle } from "react-icons/bi";


// const Menu = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Top Rated",
//     link: "/#services",
//   },
//   {
//     id: 3,
//     name: "Mobiles",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Laptops",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Electronics",
//     link: "/#",
//   },
// ];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/#",
//   },
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   return (
//     <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div>
//             <a href="#" className="font-bold text-xl items-center flex gap-1">
//               <FiShoppingBag size="30" />
//               ZebCart
//             </a>
//           </div>

//           {/* search bar */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
//                 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800 "
//               />
//               <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* order button */}
//             <button
//               onClick={() => handleOrderPopup()}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all duration-200">
//                 Order
//               </span>
//               <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              
//             </button>
            

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//             <div className="flex items-center space-x-4">
//       {/* Login/Signup Icon */}
//       <a
//         href="/ECommerce/demo/src/components/LoginandSignup/Login.jsx"
//         className="flex items-center text-gray-700 hover:text-yellow-500 transition duration-300"
//         title="Login / Signup"
//       >
//         <BiSolidUserCircle className="text-4xl" />
//         <span className="ml-2 font-bold hidden md:inline">Login / Signup</span>
//       </a>
//     </div>
//           </div>
//         </div>
//       </div>
//       {/* lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Simple Dropdown and Links */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React from "react";
import { NavLink } from "react-router-dom";

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { BiSolidUserCircle } from "react-icons/bi";

import DarkMode from "./DarkMode";

export default function Navbar({ handleOrderPopup }) {
  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="font-bold text-xl flex items-center gap-1">
            <FiShoppingBag size="30" />
            ZebCart
          </NavLink>

          {/* Search Bar */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Toggle */}
            <DarkMode />

            {/* Login/Signup */}
            <NavLink
              to="/login-signup"
              className="flex items-center text-gray-700 hover:text-yellow-500 transition duration-300"
              title="Login / Signup"
            >
              <BiSolidUserCircle className="text-4xl" />
              <span className="ml-2 font-bold hidden md:inline">Login / Signup</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {/* Links */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-block px-4 duration-200 ${isActive ? "text-primary font-semibold" : "hover:text-primary"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top-products"
              className={({ isActive }) =>
                `inline-block px-4 duration-200 ${isActive ? "text-primary font-semibold" : "hover:text-primary"}`
              }
            >
              Top Rated
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mobiles"
              className={({ isActive }) =>
                `inline-block px-4 duration-200 ${isActive ? "text-primary font-semibold" : "hover:text-primary"}`
              }
            >
              Mobiles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/laptops"
              className={({ isActive }) =>
                `inline-block px-4 duration-200 ${isActive ? "text-primary font-semibold" : "hover:text-primary"}`
              }
            >
              Laptops
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/electronics"
              className={({ isActive }) =>
                `inline-block px-4 duration-200 ${isActive ? "text-primary font-semibold" : "hover:text-primary"}`
              }
            >
              Electronics
            </NavLink>
          </li>

          {/* Dropdown Menu */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-[2px] py-2">
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </div>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                <li>
                  <NavLink
                    to="/trending-products"
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    Trending Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/best-selling"
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    Best Selling
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/top-products"
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    Top Rated
                  </NavLink>
                </li> 
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
