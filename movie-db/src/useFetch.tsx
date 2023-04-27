import react, { useState, useEffect } from "react";
import { movieProps, errorType } from "./context";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=388f5944`;

const useFetch = (urlParams: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<errorType>({ show: false, msg: "" });
  const [movies, setMovies] = useState<movieProps[] | movieProps>([]);

  const fetchMovies = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, movies };
};

export default useFetch;
