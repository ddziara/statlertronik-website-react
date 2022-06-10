import * as React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductSharedLayout from "./pages/ProductSharedLayout";
import Products from "./pages/Products";
import Product from "./pages/Product";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="products/:productId" element={<ProductSharedLayout />}>
          <Route index element={<Product />}></Route>
          <Route path="res" element={<Product />}></Route>
        </Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
