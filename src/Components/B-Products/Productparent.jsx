import React from "react"; //(1.1)
import axios from "axios"; //(2.1)
import { useState, useEffect } from "react"; //(2.0)
import { useDispatch, useSelector } from "react-redux"; //(2.2)
import ProductChild from "./ProductChild"; //(2.14)
import "./Redux.css"; //(3.1)

//(1.2)(4.0--->search)
const Productparent = ({ search }) => {
  // (4.2)
  const stateProducts = useSelector((state) => state.groupreducer.product());
  //(2.8)
  const [products, setProducts] = useState([]);
  //(2.10)
  const dispatch = useDispatch();
  //(2.4)(2.6---->write async)
  const getApiProduct = async () => {
    //(2.5)(2.7---->await)
    const allProducts = await axios.get("https://fakestoreapi.com/products");
    // console.log("All prod--->", allProducts);
    //(2.9)
    setProducts(allProducts.data);
    //(4.2)
    stateProducts.length <= 0 &&
      //(2.11)
      dispatch({ type: "Add-Product", data: allProducts.data });
  };
  //(2.3)
  useEffect(() => {
    getApiProduct();
  }, []);
  //(4.1)
  useEffect(() => {
    const filtered = stateProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filtered);
  }, [search]);
  //(1.3)
  return (
    <div>
      {/* (1.4) */}
      <h1>Product Parent</h1>
      {/* (2.12)(3.0----> classname for css) */}
      <div className="cards-parent">
        {products.map((item) => {
          //(2.13)
          return <ProductChild item={item} />;
        })}
      </div>
    </div>
  );
};

export default Productparent;
