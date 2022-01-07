//(1)
export const groupreducer = (
  //(1.1)
  state = { product: [], cart: [], selectedProd: [] },
  //(1.2)
  action
) => {
  //(1.3)
  if (action.type === "Add-Product") {
    return { ...state, product: [...action.data, ...state.product] };
  }
  //(1.4)
  if (action.type === "Selected-Product") {
    return { ...state, selectedProd: [action.data] };
  }
  //(1.5)
  if (action.type === "Add-Cart") {
    //(1.5) (2.0--->action change{action.data}without curly brases)
    return {
      ...state,
      cart: [{ ...action.data, key: state.cart.length }, ...state.cart],
    };
  }
  //(1.6)
  if (action.type === "Remove-Product") {
    //(1.7)(2.1--->addede ,key)
    const filteredProducts = state.cart.filter(
      (item) => item.key !== action.data.key
    );
    //(1.8)
    return { ...state, cart: filteredProducts };
  }
  //(1.9)
  return state;
};
