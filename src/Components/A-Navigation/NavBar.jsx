import React from "react"; //(1.1)
import { Link } from "react-router-dom"; //(2.0)
import "./NavBar.css";
import { useSelector } from "react-redux"; //(3.0)

//(1.2)(4.0--->setSearch)
export const NavBar = ({ setSearch }) => {
  //(3.1)
  const cartItem = useSelector((state) => state.groupreducer.cart);
  return (
    <div className="NavBar">
      {/* (1.4)(2.1) */}
      <Link className="link1" to="/">
        Redux App
      </Link>
      {/* (1.5)(4.1--->onchange) */}
      <input onChange={() => setSearch((e) => e.target.value)} type="text" />
      {/* (1.6) */}
      <button className="search">Search</button>
      {/* (1.7)(2.2)(3.2) */}
      <Link className="link2" to="/cart">
        Cart :{cartItem.length}
      </Link>
    </div>
  );
};

export default NavBar;
