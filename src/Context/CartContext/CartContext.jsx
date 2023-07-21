import { createContext } from 'react';
import { initialCart } from './CartContextState';

export const CartContext = createContext(initialCart);

