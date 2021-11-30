/*eslint-disable*/
import "./App.css";
import React, { useState } from "react";
import Data from "./js/data";
import Jumbotron from "./js/Jumbotron";
import Content from "./js/Content";
import Detail from "./js/Detail";
import { Link, Route, Switch } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">Small Shop</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="base-left" to="/woman">
                Woman
              </Link>
              <Link className="base-left" to="/man">
                man
              </Link>
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

      <Switch>
        {/* Main Page */}
        <Route exact path="/">
          {/* Jumbotron */}
          <Jumbotron />
          {/* Content */}
          <Content data={shoes} />
        </Route>

        {/* Detail Page */}
        <Route path="/detail/:id">
          <Detail data={shoes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
