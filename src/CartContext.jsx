import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex > -1) {
        // Update quantity of existing product
        const updatedCart = state.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return updatedCart;
      } else {
        // Add new product
        return [...state, { ...action.payload, quantity: action.payload.quantity }];
      }
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
