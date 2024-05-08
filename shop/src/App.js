import { useState } from "react";
import "./App.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./Detail";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>없는페이지에용</div>} />
        {/* Nested Routes */}
        <Route path="/about" element={<Detail />}>
          <Route path="member" element={<About />} />
          <Route path="location" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
        alt=""
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

// Q. Nested routes 언제씀?
// - 여러 유사한 페이지가 필요할때
