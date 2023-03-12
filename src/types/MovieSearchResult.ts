export interface MovieSearchResult {
  Search?: Movie[];
  totalResults?: string;
  Response: string;
}

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

export interface MovieDetails extends Movie {
  Plot: string;
  Director: string;
  imdbRating: string;
}
