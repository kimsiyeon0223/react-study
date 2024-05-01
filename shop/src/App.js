import "./App.css";
import { Button, Nav, Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Button variant="primary">primary</Button>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage: "url(" }}></div>
    </div>
  );
}

export default App;
