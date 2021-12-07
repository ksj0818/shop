import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Nav } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { stockContext } from "../App";
import { CSSTransition } from "react-transition-group";
import "../App.css";

function Detail(props) {
  let stock = useContext(stockContext);
  let [alert1, setAlert] = useState(true);
  let [input1, setinput] = useState();
  let history = useHistory();
  let { id } = useParams(); // 사용자가 입력한 URL파라미터들 담겨있음
  let index = id;
  index++;
  let [tap, setTap] = useState(0);
  let [inSwitch, setInSwitch] = useState(false);

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
            <Info stock={stock}></Info>
          </Card.Body>
        </Card>
        <Button
          variant="danger"
          onClick={() => {
            // 구매하기 버튼 클릭 시 재고 -1
            props.setStock([9, 11, 12]);
          }}
        >
          구매하기
        </Button>
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
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link>상품설명</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setInSwitch(false);
              setTap(0);
            }}
          >
            상세내용
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setInSwitch(false);
              setTap(1);
            }}
          >
            배송정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={inSwitch} classNames="wow" timeout={2000}>
        <TapContent data={tap} switch={setInSwitch} />
      </CSSTransition>
    </div>
  );
}

function TapContent(props) {
  useEffect(() => {
    props.switch(true);
  });
  if (props.data === 0) {
    return <div>1번째 데이터</div>;
  } else if (props.data === 1) {
    return <div>2번째 데이터</div>;
  }
}

function Info(props) {
  let { id } = useParams(); // 사용자가 입력한 URL파라미터들 담겨있음
  return <p>재고 : {props.stock[id]}</p>;
}

export default Detail;
