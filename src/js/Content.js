import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <Container>
      <Row className="center">
        {
          //
          props.data.map((s) => {
            let id = s.id;
            return (
              <Col className="base-top col-4" key={s.id}>
                <Card style={{ width: "18rem" }}>
                  <Link to={"/detail/" + id}>
                    <Card.Img
                      className="point"
                      variant="top"
                      src={
                        "https://codingapple1.github.io/shop/shoes" +
                        ++id +
                        ".jpg"
                      }
                    />
                  </Link>
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
  );
}

export default Content;
