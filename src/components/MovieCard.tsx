import { Col, Card } from "react-bootstrap";
import { Movie } from "../types/MovieSearchResult";
import NextLink from "next/link";
import Image from "next/legacy/image";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <NextLink href={`/${movie.imdbID}`} className="text-dark text-decoration-none">
      <Col>
        <Card>
          <figure>
            <Image
              src={movie.Poster !== "N/A" ? movie.Poster : "/movie/images/default-image.jpg"}
              alt={movie.Title}
              width={245}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </figure>
          <Card.Body>
            <Card.Title className="fs-6 text-truncate" title={movie.Title}>
              {movie.Title}
            </Card.Title>
            <Card.Text>Year: {movie.Year}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </NextLink>
  );
};

export default MovieCard;
