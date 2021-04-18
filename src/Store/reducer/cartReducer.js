const initialState = {
  cartArray: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_TO_CART": {
      if (state.cartArray.find((x) => x.id === action.data.id)) {
        alert("Already Added");
        return state;
      }
      console.log("Cart added");
      return { ...state, cartArray: [...state.cartArray, action.data] };
    }
    case "REMOVE_FROM_CART": {
      console.log("Cart Removed", action.data);
      let filtered = state.cartArray.filter((x) => {
        return x.id !== action.data;
      });
      console.log(filtered);
      return { ...state, cartArray: filtered };
    }
    default:
      return state;
  }
};
export default cartReducer;
