import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { MovieDetails } from "../../types/MovieSearchResult";
import NavigationBar from "@/components/NavigationBar";
import { API_URL, API_KEY } from "../api/config";
import MovieDetailsItem from "../../components/MovieDetailsItem";

type MovieProps = {
  movie: MovieDetails;
};

const Movie = ({ movie }: MovieProps) => {
  return (
    <>
      <NavigationBar searchEnabled={false} />
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Image
              src={movie.Poster}
              alt={movie.Title}
              width={300}
              height={450}
              layout="responsive"
              priority={true}
            />
          </Col>
          <Col md={8}>
            <h2>{movie.Title}</h2>
            <MovieDetailsItem label="Director" value={movie.Director} />
            <MovieDetailsItem label="Plot" value={movie.Plot} />
            <MovieDetailsItem label="IMDB Rating" value={movie.imdbRating} />
            <MovieDetailsItem label="Year" value={movie.Year} />
            <MovieDetailsItem label="Type" value={movie.Type} />
            <MovieDetailsItem label="IMDB ID" value={movie.imdbID} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Movie;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<MovieProps, { id: string }> = async (context) => {
  const id = context.params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(`${API_URL}?i=${encodeURIComponent(id)}&apikey=${API_KEY}`);
  const movie = await res.json();

  const movieDetails: MovieDetails = {
    ...movie,
    Plot: movie.Plot,
    Director: movie.Director,
    imdbRating: movie.imdbRating,
  };

  return {
    props: {
      movie: movieDetails,
    },
  };
};
