import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
import useFetch from './useFetch'

interface AppContextProps {
  isLoading: boolean;
  error: ErrorPorps | null;
  movies: MovieType[] | null;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export interface MovieType {
  imdbID: number;
  Poster: string;
  Title: string;
  Year: number;
}

interface ErrorPorps {
  show: Boolean;
  msg: string |null
}

interface ChildrenType {
  children?: React.ReactNode;
}

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext<AppContextProps>({
  isLoading: false,
  error: {
    show: false,
    msg: null
  },
  movies: [],
  query: "",
  setQuery: () => {}
})

const AppProvider = ({children} : ChildrenType) => {
  const [query, setQuery] = useState<string>('batman')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)
  const value: AppContextProps = {isLoading, error:null, movies, query, setQuery};

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
