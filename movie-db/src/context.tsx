import React, { useState, createContext, useContext, useEffect } from "react";
// make sure to use https
import useFetch from "./useFetch";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=388f5944`;

export interface movieProps {
  imdbID: number;
  Title: string;
  Year: number;
  Poster: string;
  Plot: string;
}

export interface errorType {
  show: boolean;
  msg: string;
}

export interface AppContextType {
  isLoading: boolean;
  error: errorType;
  movies: movieProps[] | movieProps;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType>({
  isLoading: false,
  error: { show: false, msg: "" },
  movies: [],
  query: "",
  setQuery: () => {},
});

export interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [query, setQuery] = useState<string>("batman");
  const { isLoading, error, movies } = useFetch(`&s=${query}`);

  const [appValue, setAppValue] = useState<AppContextType>({
    isLoading,
    error,
    movies: movies,
    query,
    setQuery,
  });

  useEffect(() => {
    setAppValue({
      isLoading,
      error,
      movies: movies,
      query,
      setQuery,
    });
  }, [isLoading, error, movies]);

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
