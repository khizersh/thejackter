export const add_to_cart = (data) => {
  return {
    type: "Add_TO_CART",
    data,
  };
};
export const remove_from_cart = (data) => {
  return {
    type: "REMOVE_FROM_CART",
    data,
  };
};
