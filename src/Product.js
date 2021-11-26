import React from "react";
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
function Product(props) {
  console.log(props.data.title);
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.data.url} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.content}</Card.Text>
          <Card.Text>{props.data.price}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
