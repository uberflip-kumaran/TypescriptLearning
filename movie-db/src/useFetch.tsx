import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=388f5944&i=tt1285016`

interface ErrorProps {
  show: boolean;
  msg: string;
}

const errorValue: ErrorProps = {
  show: false,
  msg: ''
};

const useFetch = (urlParams:string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(errorValue)
  const [data, setData] = useState(null)
  const fetchMovies = async (url:string) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.Response === 'True') {
        setData(data.Search || data)

        setError(errorValue)
      } else {
        setError({ show: true, msg: data.Error })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])
  return { isLoading, error, data }
}

export default useFetch
