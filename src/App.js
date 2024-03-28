import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import ProductDetails from "./components/Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/product/:proId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
