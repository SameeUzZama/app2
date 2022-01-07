import React from "react"; //(1.1)
import "./Redux.css"; //(3.0)
import { useDispatch } from "react-redux"; //(4.0)
import { Link } from "react-router-dom"; //(4.1)

//(1.2)(2.0----recive prop as a item)
const ProductChild = ({ item }) => {
  // (4.1)
  const dispatch = useDispatch();
  return (
    <div>
      {/* (3.2--->classname for css) */}
      <div className="card">
        {/* (2.1) */}
        <img className="image" src={item.image} alt="" />
        {/* (2.2)(3.1--->use substring) */}
        <h6>{item.title.substr(0, 20) + "..."}</h6>
        {/* (2.3) */}
        <h5>Price: ${item.price}</h5>
        {/* (2.4)(4.2--->onclick) */}
        <button onClick={() => dispatch({ type: "Add-Cart", data: item })}>
          Add to Cart
        </button>
        {/* (2.5) */}
        {/* (4.0 take Link ) */}
        <Link to="/details">
          {/* (4.2 onclick) */}
          <button
            onClick={() => dispatch({ type: "selectedProd", data: item })}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductChild;
