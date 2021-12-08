import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import "../App.css";

function Cart(props) {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((s) => {
            return (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량증가" });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량감소" });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.cartUi ? (
        <div className="cart-ui">
          <p>지금 구매하면 20% 할인적용!</p>
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.dispatch({ type: "ui닫기" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

function store(state) {
  return {
    state: state.reducer, // store 안에 있던 모든 데이터가 props로 등록된다.
    cartUi: state.reducerCart,
  };
}
// connect 함수에 아까 만든 함수를 집어넣습니다. 그냥 react-redux 라이브러리 사용법입니다.
export default connect(store)(Cart);

// export default Cart;
