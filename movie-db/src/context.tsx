import React, { useState, useContext, useEffect, FC, createContext } from 'react'
// make sure to use https
import useFetch from './useFetch'
//export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.REACT_APP_MOVIE_API_KEY}`


export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=388f5944&i=tt1285016`;

interface AppContextProps {
  isLoading: boolean;
  error: Error;
  movies: null | MovieProps[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface MovieProps {
  imdID: string;
  Title: string;
  year: string;
  poster: string;
}

interface Error  {
  show: boolean;
  msg: string;
}

const AppContext = React.createContext<AppContextProps>({
  isLoading: false,
  error: {show: false, msg: ''},
  movies: null,
  query: '',
  setQuery: () => {},
});

interface ChildrenProps {
  children?: React.ReactNode;
  // any props that come into the component
}



const AppProvider = ({ children, ...Childrenprops }:ChildrenProps) => {
  const [query, setQuery] = useState<string>('batman');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);
  const value: AppContextProps = {isLoading, error, movies, query, setQuery};
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
