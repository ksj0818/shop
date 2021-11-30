import React from "react";
import { useHistory, useParams } from "react-router-dom";
function Detail(props) {
  let { id } = useParams(); // 사용자가 입력한 URL파라미터들 담겨있음
  let history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            alt="img"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.data[id].title}</h4>
          <p>{props.data[id].content}</p>
          <p>{props.data[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              // push() 라는 함수를 쓰시고 안에 경로를 입력하시면 그 경로로 이동합니다.
              // history.goBack(); 뒤로가기
              // history.push("/test");
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
