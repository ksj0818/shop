/*eslint-disable*/
import "./App.css";
import React, { useState } from "react";
import Data from "./js/data";
import Test from "./js/Test";
import Jumbotron from "./js/Jumbotron";
import { Link, Route, Switch } from "react-router-dom";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Card,
} from "react-bootstrap";
function App() {
  let [shoes, setShoes] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Shoes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action2">Woman</Nav.Link>
              <Nav.Link href="#">man</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 메인페이지 */}
      <Route exact path="/">
        <Jumbotron data={shoes}></Jumbotron>
      </Route>
      {/* 상세페이지 */}
      <Route path="/detail">
        <div>상세페이지</div>
      </Route>
      {/* 테스트페이지 */}
      <Route path="/test">
        <Test title="컴포넌트" />
      </Route>
      {/* <Route exact path="/test" component={Test}></Route> */}
    </div>
  );
}

export default App;
