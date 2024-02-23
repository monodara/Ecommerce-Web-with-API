import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/NavBar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import SearchBar from "./components/search/SearchBar";
import ProductCollect from "./pages/ProductCollect";
import SingleProduct from "./components/product/SingleProduct";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import UserRegisterForm from "./components/user/UserRegister";
import UserProfile from "./components/user/UseProfile";
import UserLogin from "./components/user/UserLogin";
import SearchForm from "./components/search/SearchForm";
import Categories from "./components/category/Categories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchForm />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <ProductCollect url={"https://api.escuelajs.co/api/v1/products"} />
          }
        />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
