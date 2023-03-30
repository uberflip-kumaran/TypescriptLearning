import React, { useState, useContext, useEffect } from "react";
// make sure to use https
import useFetch from "./useFetch";
import { ContentProps, ChildrenType } from "./types";

const AppContext = React.createContext<ContentProps>({
  isLoading: false,
  error: {
    show: false,
    msg: "",
  },
  movies: [],
  query: "",
  setQuery: () => {},
});

const AppProvider = ({ children }: ChildrenType) => {
  const [query, setQuery] = useState<string>("batman");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
