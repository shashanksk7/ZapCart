// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState } from "react";
// import Banner from "./components/Banner/Banner.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Hero from "./components/Hero/Hero.jsx";
// import Popup from "./components/Popup/Popup.jsx";
// import Products from "./components/Products/Products.jsx";
// import TopProducts from "./components/TopProducts/TopProducts.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import Testimonials from "./components/Testimonials/Testimonials.jsx";
// import Subscribe from "./components/Subscribe/Subscribe.jsx"
// import LoginSignup from "./components/LoginandSignup/Login.jsx";


// function App() {
//   const [orderPopup, setOrderPopup] = useState(false); // ✅ Fixed useState syntax

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//   }, []); // ✅ Removed unnecessary AOS.refresh()

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//     <Navbar handleOrderPopup={handleOrderPopup} />
//     {/* <LoginSignup/> */}
//     <Hero handleOrderPopup={handleOrderPopup} />
//     <Products />
//     <TopProducts handleOrderPopup={handleOrderPopup} />
//     <Banner />
//     <Subscribe />
//     <Testimonials />
//     <Footer />
//     <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> 
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TopProducts from "./components/TopProducts";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Footer from "./components/footer";
import LoginSignup from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Products />} />
            <Route path="/top-products" element={<TopProducts />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/login-signup" element={<LoginSignup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;