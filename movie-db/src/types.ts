export interface ContentProps {
  isLoading: boolean;
  error: ErrorProps;
  movies: MovieType[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface MovieType {
  imdbID: number;
  Poster: string;
  Title: string;
  Year: number;
}

export interface ErrorProps {
  show: boolean;
  msg: string;
}

export interface SingleMovieType {
  Poster: string;
  Title: string;
  Plot: string;
  Year: number;
}

export interface ChildrenType {
  children?: React.ReactNode;
}
