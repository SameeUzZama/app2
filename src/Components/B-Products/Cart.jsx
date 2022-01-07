import React from "react"; //(1.1)
// import "./Redux.css";
import { useSelector, useDispatch } from "react-redux"; //(2.0)(3.1--->useDispatch)
import { Link } from "react-router-dom";

//(1.2)
export const Cart = () => {
  //(3.2)
  const dispatch = useDispatch();
  //(2.1)(2.2--->state)
  const cartItem = useSelector((state) => state.groupreducer.cart);
  // console.log("cart--->", cartItem);
  return (
    <div>
      {/* (1.3) */}
      <h1>Hello Cart</h1>
      {/* (2.3) */}
      <div className="card">
        {/* (2.4) */}
        {cartItem.map((item) => {
          //(2.5)
          return (
            <div>
              <img className="image" src={item.image} alt="" />
              <h6>{item.title.substr(0, 20) + "..."}</h6>
              <h5>Price: ${item.price}</h5>
              {/* (3.0)(3.3--->onClick) */}
              <button
                onClick={() => dispatch({ type: "Remove-Product", data: item })}
              >
                Remove
              </button>
              <Link to="/details">
                <button
                  onClick={() =>
                    dispatch({ type: "Selected-Product", data: item })
                  }
                >
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
