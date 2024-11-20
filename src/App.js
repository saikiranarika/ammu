import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={<HomePage searchTerm={searchTerm} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
};

export default App;
