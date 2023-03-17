import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
import useFetch from './useFetch'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

export interface MovieTypes {
  imdID: number;
  Title: string;
  year: number;
  poster: string;
}
interface AppContextType {
  isLoading: boolean;
  error: string;
  movies: MovieTypes[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = React.createContext<AppContextType>({
  isLoading: false,
  error: '',
  movies: [],
  query: '',
  setQuery: () => {},
});

interface ChildrenType {
  children?: React.ReactNode;
}


const AppProvider = ({ children }: ChildrenType) => {
  const [query, setQuery] = useState<string>('batman')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)
  const value: AppContextType = {isLoading, error: '', movies: [], query, setQuery};

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
