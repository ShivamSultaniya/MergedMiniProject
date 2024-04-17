import "./sass/main.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.js'
import WomenShop from "./pages/WomenShop.js";
import ProductDetails from "./pages/ProductDetails.js";
import './index.css'



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womenshop" element={<WomenShop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
  );
}

export default App;
