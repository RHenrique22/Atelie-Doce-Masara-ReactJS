import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  return (
    <>
      <Container fluid className="p-0">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="ms-3" href="#home">
            Doce Masara ❤
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Doces</Nav.Link>
            <Nav.Link href="#pricing">Preços</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}

export default Menu;
