/*eslint-disable*/
import React from "react";
import { Button, Card } from "react-bootstrap";
function Product(props) {
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            "https://codingapple1.github.io/shop/shoes" +
            props.data.id++ +
            ".jpg"
          }
        />
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
