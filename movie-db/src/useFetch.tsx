import React, { useState, useEffect } from "react";
import { ErrorProps, SingleMovieType } from "./types";
// installed types
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=388f5944`;

const useFetch = (urlParams: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorProps>({ show: false, msg: "" });
  // what do I set this to
  const [data, setData] = useState(null);
  const fetchMovies = async (url: string): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);

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
  return { isLoading, error, data };
};

export default useFetch;
