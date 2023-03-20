export interface UrlParams {
    url: string;
}

export interface FetchData {
    isLoading: boolean;
    error: {
        show: boolean;
        msg: string;
    }
    data: Movie | Movie[];
}

interface Error {
    show: boolean;
    msg: string;
}

export interface SingleFetch {
    isLoading: boolean;
    error: Error;
    data: Movie;
}

export interface Context {
    movies: Movie[] | Movie;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    error: Error;
}

export interface Movie {
    Poster: string;
    Title: string;
    imdbID: string;
    Year: string;
    Plot: string;
}