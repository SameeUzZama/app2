import React from "react"; //(1.1)
import { useSelector, useDispatch } from "react-redux"; //(2.0)

//(1.2)
const ProductDetails = () => {
  const dispatch = useDispatch();
  // (2.1)
  const selectedItem = useSelector(
    (state) => state.groupreducer.selectedProd[0]
  );
  return (
    <div>
      {/* (1.3) */}
      {/* <h1>Product Detail</h1> */}
      <img className="image" src={selectedItem.image} alt="" />
      {/* (2.2)(3.1--->use substring) */}
      <h6>{selectedItem.title.substr(0, 20) + "..."}</h6>
      {/* (2.3) */}
      <h5>Price: ${selectedItem.price}</h5>
      {/* (2.4)(4.2--->onclick) */}
      <button
        onClick={() => dispatch({ type: "Add-Cart", data: selectedItem })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
