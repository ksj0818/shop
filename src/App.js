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
import axios from "axios";
import Cart from "./js/Cart";

export let stockContext = React.createContext();
let temp = [];

function App() {
  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link className="text-deco" to="/">
              Small Shop
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="text-deco base-left" to="/woman">
                Woman
              </Link>
              <Link className="text-deco base-left" to="/man">
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
          <stockContext.Provider value={stock}>
            <Content data={shoes} />
          </stockContext.Provider>
          <button
            className="btn btn-primary"
            onClick={() => {
              // ajax 요청
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((result) => {
                  temp = [...shoes];
                  let result1 = result.data;
                  result1.map((r) => {
                    temp.push(r);
                  });
                  setShoes(temp);
                })
                .catch(() => {
                  console.log("실패");
                });
            }}
          >
            더보기
          </button>
        </Route>
        {/* Detail Page */}
        <Route path="/detail/:id">
          <stockContext.Provider value={stock}>
            <Detail data={shoes} stock={stock} setStock={setStock} />
          </stockContext.Provider>
        </Route>
        {/* Cart */}
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
