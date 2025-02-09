import ecobazarImg from "../assets/images/ezobazar_grocery.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navbarLinks = ["home", "restaurants", "shop", "about", "contact"];

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cartData = JSON.parse(localStorage.getItem("cartData")) || {};
      setCartItemCount(Object.keys(cartData).length);
    };

    updateCartCount();

    // Listen for changes in localStorage
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, [1000]);

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  const navbarLists = navbarLinks.map((item, index) => (
    <li
      key={index}
      className={`text-base duration-200 hover:text-primary-500 font-bold capitalize ${
        item === location.pathname.slice(1) ? "text-primary-500" : ""
      } ${index === 0 && location.pathname === "/" ? "text-primary-500" : ""}`}
    >
      <Link to={`/${index === 0 ? "" : item}`}>{item}</Link>
    </li>
  ));

  return (
    <nav className="fixed z-50 w-full py-4 text-white lg:py-0 bg-main-700">
      <div className="container relative flex flex-col items-center justify-between lg:flex-row">
        <div>
          <Link
            to="/"
            className="flex flex-row-reverse items-center justify-center gap-2 my-4 lg:flex-row lg:justify-start"
          >
            <img src={ecobazarImg} alt="Ecobazar logo" />
            <h1 className="text-4xl font-bold">Ecobazar</h1>
          </Link>
        </div>

        <div className="absolute right-0 z-50 flex flex-col items-end px-4 lg:relative gap-7 top-8 lg:top-0">
          <div
            onClick={showMenuHandler}
            className={`flex duration-700 ease-in-out gap-2 cursor-pointer lg:hidden ${
              showMenu ? "-rotate-[450deg]" : ""
            }`}
          >
            <span className="w-4 h-4 bg-transparent border border-blue-400 rounded-full"></span>
            <span className="w-4 h-4 bg-transparent border border-blue-400 rounded-full"></span>
            <span className="w-4 h-4 bg-transparent border border-blue-400 rounded-full"></span>
          </div>
          <ul
            className={`flex flex-col items-center px-20 py-4 before:w-8 relative before:absolute before:right-4 before:-top-2 before:h-8 lg:before:hidden before:bg-main-700 before:rotate-45 duration-200 bg-main-700 shadow-lg lg:shadow-none shadow-primary-100 rounded-xl text-start lg:bg-transparent gap-14 lg:flex-row lg:scale-100 lg:translate-y-0 ${
              showMenu ? "scale-100 translate-y-4" : "scale-0 -translate-y-8"
            }`}
          >
            {navbarLists}
          </ul>
        </div>

        {/* Cart Icon with Item Count */}
        <div className="relative flex items-center gap-4 mt-4 lg:mt-0">
          <button className="relative px-4 py-2 text-green-500 bg-white border border-green-500 rounded-lg hover:bg-green-500 hover:text-white">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform bg-green-500 rounded-lg opacity-0 hover:opacity-100 hover:scale-105"></span>
            <span className="relative">Login</span>
          </button>
          <button className="relative px-4 py-2 text-white bg-[#00B207] border border-green-500 rounded-lg hover:bg-green-700">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform bg-green-700 rounded-lg opacity-0 hover:opacity-100 hover:scale-105"></span>
            <span className="relative">Signup</span>
          </button>
          <div className="relative cursor-pointer">
            <FontAwesomeIcon icon={faBasketShopping} className="text-2xl text-white" />
            <span className="absolute px-2 py-1 text-sm font-bold text-white bg-red-600 rounded-full -top-2 -right-3">
              {cartItemCount}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
