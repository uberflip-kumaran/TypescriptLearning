export interface ContentProps {
  isLoading: boolean;
  error: ErrorProps;
  movies: MovieType[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface MovieType {
  imdbID?: string;
  Poster: string;
  Title: string;
  Plot: string;
  Year: number;
}

export interface ErrorProps {
  show: boolean;
  msg: string;
}

export interface ChildrenType {
  children?: React.ReactNode;
}
