// import React from "react";
// import Img1 from "../../src/assets/women/lcd.webp";
// import Img2 from "../../src/assets/women/mixi.jpeg";
// import Img3 from "../../src/assets/women/phone.jpeg";
// import Img4 from "../../src/assets/women/laptop.jpeg";
// import Img5 from "../../src/assets/women/download.jpeg";
// import { FaStar } from "react-icons/fa6";

// const ProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Lcd 32 inch",
//     rating: 5.0,
//     color: "Black",
//     aosDelay: "0",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Women western",
//     rating: 4.5,
//     color: "Red",
//     aosDelay: "200",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     rating: 4.7,
//     color: "brown",
//     aosDelay: "400",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed T-Shirt",
//     rating: 4.4,
//     color: "Yellow",
//     aosDelay: "600",
//   },
//   {
//     id: 5,
//     img: Img5,
//     title: "Fashin T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
// ];

// const Products = () => {
//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Top Selling Products for you
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Products
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//             asperiores modi Sit asperiores modi
//           </p>
//         </div>
//         {/* Body section */}
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//             {/* card section */}
//             {ProductsData.map((data) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={data.aosDelay}
//                 key={data.id}
//                 className="space-y-3"
//               >
//                 <img
//                   src={data.img}
//                   alt=""
//                   className="h-[220px] w-[150px] object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{data.title}</h3>
//                   <p className="text-sm text-gray-600">{data.color}</p>
//                   <div className="flex items-center gap-1">
//                     <FaStar className="text-yellow-400" />
//                     <span>{data.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* view all button */}
//           <div className="flex justify-center">
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
//               View All Button
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;



import React from "react";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import Img1 from "../../src/assets/women/lcd.webp";
import Img2 from "../../src/assets/women/mixi.jpeg";
import Img3 from "../../src/assets/women/phone.jpeg";
import Img4 from "../../src/assets/women/laptop.jpeg";
import Img5 from "../../src/assets/women/download.jpeg";

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {/* Product 1 */}
          <NavLink to="/product/lcd-32-inch" data-aos="fade-up" className="space-y-3 block">
            <img src={Img1} alt="LCD 32 inch" className="h-[220px] w-[150px] object-cover rounded-md" />
            <div>
              <h3 className="font-semibold">LCD 32 inch</h3>
              <p className="text-sm text-gray-600">Black</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>5.0</span>
              </div>
            </div>
          </NavLink>

          {/* Product 2 */}
          <NavLink to="/product/women-western" data-aos="fade-up" data-aos-delay="200" className="space-y-3 block">
            <img src={Img2} alt="Women Western" className="h-[220px] w-[150px] object-cover rounded-md" />
            <div>
              <h3 className="font-semibold">Women Western</h3>
              <p className="text-sm text-gray-600">Red</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.5</span>
              </div>
            </div>
          </NavLink>

          {/* Product 3 */}
          <NavLink to="/product/goggles" data-aos="fade-up" data-aos-delay="400" className="space-y-3 block">
            <img src={Img3} alt="Goggles" className="h-[220px] w-[150px] object-cover rounded-md" />
            <div>
              <h3 className="font-semibold">Goggles</h3>
              <p className="text-sm text-gray-600">Brown</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.7</span>
              </div>
            </div>
          </NavLink>

          {/* Product 4 */}
          <NavLink to="/product/printed-tshirt" data-aos="fade-up" data-aos-delay="600" className="space-y-3 block">
            <img src={Img4} alt="Printed T-Shirt" className="h-[220px] w-[150px] object-cover rounded-md" />
            <div>
              <h3 className="font-semibold">Printed T-Shirt</h3>
              <p className="text-sm text-gray-600">Yellow</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.4</span>
              </div>
            </div>
          </NavLink>

          {/* Product 5 */}
          <NavLink to="/product/fashion-tshirt" data-aos="fade-up" data-aos-delay="800" className="space-y-3 block">
            <img src={Img5} alt="Fashion T-Shirt" className="h-[220px] w-[150px] object-cover rounded-md" />
            <div>
              <h3 className="font-semibold">Fashion T-Shirt</h3>
              <p className="text-sm text-gray-600">Pink</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>4.5</span>
              </div>
            </div>
          </NavLink>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <NavLink to="/products">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Products
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Products;

