import React, { useState, useContext, useMemo, PropsWithChildren } from 'react'
// make sure to use https
import useFetch from './useFetch'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_MOVIE_API_KEY}`
import { Context } from './types'


const defaultState: Context = {
  movies: [],
  query: '',
  setQuery: () => {},
  isLoading: true,
  error: {
    show: false,
    msg: ''
  },
}

const AppContext = React.createContext<Context>(defaultState)

const AppProvider = ({ children }: PropsWithChildren) => {
  const [query, setQuery] = useState('batman');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  const providerValue = useMemo(() => ({ isLoading, error, movies, query, setQuery}), [isLoading, error, movies,query, setQuery]);

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  );
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
