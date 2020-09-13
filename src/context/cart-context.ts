import * as React from 'react';
import {Dish} from '@src/data/mock-places';

export type CartItem = {
  dish: Dish;
  sideDishes: Dish[];
};

export type CartState = {
  cartItems: CartItem[];
  updateCartItems: (items: CartItem[], totlaPrice: number) => void;
  totalPrice: number;
  clearCart: () => void;
};

const initialCartState: CartState = {
  cartItems: [],
  updateCartItems: () => {},
  totalPrice: 0,
  clearCart: () => {},
};

export default React.createContext(initialCartState);
