import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCat from "./Pages/ShopCat";
import Cart from "./Pages/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use BrowserRouter to wrap your routes

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          {" "}
          <Route path="/" element={<Shop />} /> {/* Default route */}
          {/* Routes for Shop Categories */}
          <Route path="/mens" element={<ShopCat category="men" />} />
          <Route path="/womens" element={<ShopCat category="women" />} />
          <Route path="/kids" element={<ShopCat category="kid" />} />
          {/* Product route with dynamic productId */}
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          {/* Login route */}
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
