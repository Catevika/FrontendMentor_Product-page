import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { INITIAL_STATE } from './CartContextState';
import CartReducer from './CartReducer';



export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        cart: [...state.cart],
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node
};
