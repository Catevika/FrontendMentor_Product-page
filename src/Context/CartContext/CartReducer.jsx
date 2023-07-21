const CartReducer = (state, action) => {
  let newCart = [];
  if (state.cart) {
    const index = state.cart.findIndex(
      (cartItem) => cartItem.id === action.id
    );
    newCart = [...state.cart];

    if (index >= 0) {
      newCart.splice(index, 1);
    }
    sessionStorage.setItem('cart', JSON.stringify(newCart));
  }

  console.log(action);

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
        isFetching: false,
        error: false
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: newCart,
        isFetching: false,
        error: false
      };

    case 'RESET_CART':
      return {
        ...state,
        cart: [],
        isFetching: false,
        error: false
      };

    default:
      return state;
  }
};

export default CartReducer;
