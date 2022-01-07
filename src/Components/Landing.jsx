import React, { useState } from "react"; //(1.1)(3.0)
import { NavBar } from "./A-Navigation/NavBar"; //(2.2)
import { BrowserRouter, Routes, Route } from "react-router-dom"; //(2.0)
import Productparent from "./B-Products/Productparent"; //(2.4)
import { Cart } from "./B-Products/Cart"; //(2.5)
import ProductDetails from "./B-Products/ProductDetails"; //(2.6)

//(1.2)
export const Landing = () => {
  //(3.1)
  const [search, setSearch] = useState("");
  return (
    <div>
      {/* (2.1) */}
      <BrowserRouter>
        {/* (2.2)(3.2--->setSearch) */}
        <NavBar setSearch={setSearch} />
        {/* (2.3) */}
        <Routes>
          {/* (2.4)(3.3--->search) */}
          <Route path="/" element={<Productparent search={search} />} />
          {/* (2.5) */}
          <Route path="/cart" element={<Cart />} />
          {/* (2.6) */}
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
