import { Form, InputGroup, Button } from "react-bootstrap";

interface SearchProps {
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchProps> = ({
  query,
  handleInputChange,
  handleSearch,
  handleKeyDown,
}) => {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="me-2 w-100"
        aria-label="Search"
      />
      <Button variant="outline-success" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
