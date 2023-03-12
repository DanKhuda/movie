import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";
import { ReactNode } from "react";

interface NavigationBarProps {
  searchEnabled?: boolean;
  children?: ReactNode;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ searchEnabled = true, children }) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Link href="/" passHref className="text-decoration-none">
          <Navbar.Brand>Movies</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          {searchEnabled && children}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
