import React from 'react'
import { useGlobalContext } from './context'

interface ErrorProps {
  show: boolean;
  msg: string;
}
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  return (
    <form className='search-form' onSubmit={(e: React.FormEvent) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type='text '
        className='form-input'
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      />
    
    </form>
  )
}

export default SearchForm
