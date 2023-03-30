import React, { useState, useContext, useReducer, useEffect } from "react";
import { itemsArray, ItemType } from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";

export interface StateType {
  loading: boolean;
  cart: ItemType[];
  total: number;
  amount: number;
  clearCart: () => void;
  remove: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  toggleAmount: (id: number, incDec: string) => void;
}

const initialState = {
  loading: false,
  cart: itemsArray,
  total: 0,
  amount: 0,
  clearCart: () => {},
  remove: () => {},
  increase: () => {},
  decrease: () => {},
  toggleAmount: () => {},
};

const AppContext = React.createContext<StateType>(initialState);

interface PropType {
  children: JSX.Element;
}

const AppProvider = ({ children }: PropType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id: number) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };
  const toggleAmount = (id: number, type: string) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
