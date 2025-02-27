/* eslint-disable no-undef */
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import PageNotFound from "./pages/PageNotFound";
import RestaurantsPage from "./pages/RestaurantsPage";
import ShopPage from "./pages/ShopPage";
import Contact from "./pages/Contact";
import CartPage from "./components/Cart/CartPage";
import ProductDetails from "./components/ProductDetails";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SignupPage from "./pages/Auth/SignUp/Signup";
import LoginPage from "./pages/Auth/Login/login";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/product/:uid" element={<ProductDetailsPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};

export default App;
