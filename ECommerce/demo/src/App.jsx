import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
<<<<<<< HEAD
import Hero from "./components/Hero/Hero.jsx"
import Footer from "./components/footer/footer.jsx";
=======
import Hero from "./components/Hero/Hero.jsx";
import Popup from "./components/Popup/Popup.jsx";
import Products from "./components/Products/Products.jsx";
import TopProducts from "./components/TopProducts/TopProducts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Subscribe from "./components/Subscribe/Subscribe.jsx"

>>>>>>> 7d877cf3d6c294d8d5fbc540ed020b1ab6c06262

function App() {
  const [orderPopup, setOrderPopup] = useState(false); // ✅ Fixed useState syntax

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []); // ✅ Removed unnecessary AOS.refresh()

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar handleOrderPopup={handleOrderPopup} />
    <Hero handleOrderPopup={handleOrderPopup} />
    <Products />
    <TopProducts handleOrderPopup={handleOrderPopup} />
    <Banner />
<<<<<<< HEAD
    <Footer />
=======
    <Subscribe />
    <Testimonials />
    <Footer />
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
>>>>>>> 7d877cf3d6c294d8d5fbc540ed020b1ab6c06262
      
    
      
      
    </div>
  );
}

export default App;
