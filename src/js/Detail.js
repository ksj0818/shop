import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

import "../App.css";

function Detail(props) {
  let [alert1, setAlert] = useState(true);
  let [input1, setinput] = useState();
  let { id } = useParams(); // 사용자가 입력한 URL파라미터들 담겨있음
  let history = useHistory();
  let index = id;
  index++;

  useEffect(() => {
    let s = setTimeout(() => {
      // 2초 뒤 클래스이름 hidden으로 변경
      // let d = document.getElementById("detail-alert");
      // d.className = "hidden";

      // state를 false로 변경
      setAlert(false);
    }, 3000);
    // set타임아웃이 실행 되기전에 컴포넌트 종료시 버그가 발생할 수도 있기 때문에 리턴시 타임아웃을 클리어 해주기
    return () => {
      clearTimeout(s);
    };
    // 이 useEffect() alert1라는 state가 변경될 때만 실행한다
  }, []);

  return (
    <div className="container">
      <div>{input1}</div>
      <input
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      {
        //
        alert1 ? (
          <div id="detail-alert" className="detail-alert">
            재고가 얼마 남지 않았습니다.
          </div>
        ) : null
      }
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
