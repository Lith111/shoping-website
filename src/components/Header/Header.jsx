import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Vector.png";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="png" /> FASHION
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 d-flex">
            <Nav.Link
              href="#SIGNUP"
              className="bg-dark text-light "
              style={{ borderRadius: "8px" }}
            >
              SIGN UP
            </Nav.Link>
            <Nav.Link href="#CATALOGUE">CATALOGUE</Nav.Link>
            <Nav.Link href="#FASHION">FASHION</Nav.Link>
            <Nav.Link href="#FAVOURITE">FAVOURITE</Nav.Link>
            <Nav.Link href="#LIFESTYLE">LIFESTYLE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
