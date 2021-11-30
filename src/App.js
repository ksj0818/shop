/*eslint-disable*/
import "./App.css";
import React, { useState } from "react";
import Data from "./js/data";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";

function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Small Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
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
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
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
      {/* Jumbotron */}
      <div className="jumbotron">
        <div className="text__box">
          <h1>Season OFF 20%</h1>
          <p>
            Note that depending on how they are used, badges may be confusing
            for users of screen readers and similar assistive technologies.
            While the styling of badges provides a visual cue as to their
            purpose, these users will simply be presented with the content of
            the badge. Depending on the specific situation, these badges may
            seem like random additional words or numbers at the end of a
            sentence, link, or button. Unless the context is clear, consider
            including additional context with a visually hidden piece of
            additional text.
          </p>
        </div>
      </div>
      {/* Card */}
      <Container>
        <Row className="center">
          {
            //
            shoes.map((s) => {
              return (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://codingapple1.github.io/shop/shoes" + {++s.id} + ".jpg"
                    />
                    <Card.Body>
                      <Card.Title>{s.title}</Card.Title>
                      <Card.Text>{s.content}</Card.Text>
                      <Card.Text>{s.price}</Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
