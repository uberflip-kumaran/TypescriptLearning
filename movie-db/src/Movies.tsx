import React, { useState, useEffect } from "react";
import { useGlobalContext, movieProps } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

interface MoviesType {
  movies: movieProps[] | movieProps;
  isLoading: Boolean;
}

const Movies = () => {
  const [moviesType, setMoviesType] = useState<MoviesType>();
  const { movies, isLoading } = useGlobalContext();

  useEffect(() => {
    setMoviesType({ movies, isLoading });
  }, [movies, isLoading]);

  if (moviesType?.isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {moviesType !== undefined
        ? moviesType.movies.map((movie: movieProps) => {
            const { imdbID, Poster, Title, Year } = movie;
            return (
              <Link key={imdbID} to={`/movies/${imdbID}`} className="movie">
                <article>
                  <img src={Poster === "N/A" ? url : Poster} alt={Title} />
                  <div className="movie-info">
                    <h4 className="title">{Title}</h4>
                    <p>{Year}</p>
                  </div>
                </article>
              </Link>
            );
          })
        : ""}
    </section>
  );
};

export default Movies;
