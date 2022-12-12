import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="app bg-stone-50 text-gray-700 min-h-screen text-base font-normal">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar userName={userName} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-up" element={<SignUp setUserName={setUserName} />} />
        <Route path="/sign-in" element={<SignIn setUserName={setUserName} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
