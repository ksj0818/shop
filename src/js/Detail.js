import React from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let index = id;
  index++;

  return (
    <div className="container">
      <section style={{ display: "flex" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={"https://codingapple1.github.io/shop/shoes" + index + ".jpg"}
          />

          <Card.Body>
            <Card.Title>{props.data[id].title}</Card.Title>
            <Card.Text>{props.data[id].content}</Card.Text>
            <Card.Text>{props.data[id].price}</Card.Text>
          </Card.Body>
        </Card>
        <Button variant="danger">구매하기</Button>
      </section>
    </div>
  );
}

export default Detail;
