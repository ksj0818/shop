import React from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

function Detail(props) {
  let { id } = useParams(); // 사용자가 입력한 URL파라미터들 담겨있음
  let history = useHistory();
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
      <Button
        onClick={() => {
          // history.goBack(); // 이전 페이지로 이동
          history.push("/"); // push()를 이용해서 이동 가능
        }}
        variant="secondary"
      >
        뒤로가기
      </Button>
    </div>
  );
}

export default Detail;
