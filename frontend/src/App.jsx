// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import React from 'react'
// import { NavLink } from "react-router-dom";

import Home from './pages/Home';

// const App = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const handleOrderPopup = () => {
//     console.log("Order popup triggered");
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//       <Navbar handleOrderPopup={handleOrderPopup} />
//     </div>
//   );
// };

// export default App;


const App = () => {
  const ActiveClass = ({ isActive }) => isActive ? "text-secondary font-semibold" : "hover:text-green-500";
  return (
   
    <>
      <header>
        
      </header>
      <main>
        <Routes>
          <Home/>
        </Routes>
      </main>
    </>
  );
};

export default App;