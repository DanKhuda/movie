import { useState } from "react";
import { Container, Row, Col, Spinner, Pagination } from "react-bootstrap";
import MovieCard from "@/components/MovieCard";
import { MovieSearchResult } from "../types/MovieSearchResult";
import NavigationBar from "@/components/NavigationBar";
import SearchForm from "@/components/SearchForm";
import Paginator from "@/components/Paginator";
import { API_URL, API_KEY } from "./api/config";
import InitialContent from "@/components/InitialContent";

const Home: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<MovieSearchResult | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSearch = async (page: number): Promise<void> => {
    try {
      setIsLoading(true);
      setIsInitialLoad(false);
      const res = await fetch(`${API_URL}?s=${query}&apikey=${API_KEY}&page=${page}`);
      const data: MovieSearchResult = await res.json();
      if (data.Response === "True") {
        setSearchResults(data);
        setCurrentPage(page);
        setIsLoading(false);
      } else {
        setErrorMessage("Sorry, we could not find any results for that search.");
        setSearchResults(null);
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage("Oops, something went wrong. Please try again later.");
      setIsLoading(false);
      setSearchResults(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(1);
    }
  };

  const totalResults: number = Number(searchResults?.totalResults ?? 0);

  return (
    <>
      <NavigationBar>
        <SearchForm
          query={query}
          handleInputChange={handleInputChange}
          handleSearch={() => handleSearch(1)}
          handleKeyDown={handleKeyDown}
        />
      </NavigationBar>
      <Container>
        <Row className="my-5">
          <Col>
            {isInitialLoad ? <InitialContent /> : ""}
            {isLoading ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" variant="success" />
              </div>
            ) : (
              searchResults && (
                <>
                  <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={5} className="g-4">
                    {searchResults.Search?.map((movie) => (
                      <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                  </Row>
                  <Container className="d-flex justify-content-center mt-4">
                    <Paginator
                      totalItems={totalResults}
                      itemsPerPage={10}
                      currentPage={currentPage}
                      onPageChange={handleSearch}
                    />
                  </Container>
                </>
              )
            )}
            {errorMessage && !searchResults && <p>{errorMessage}</p>}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
