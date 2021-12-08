import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Router
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let cartUi = true;
function reducerCart(state = cartUi, 액션) {
  if (액션.type === "ui닫기") {
    return false;
  }
  return state;
}

let 초기값 = [
  {
    id: 0,
    name: "축구화",
    quan: 4,
  },
  {
    id: 1,
    name: "야구화",
    quan: 5,
  },
  {
    id: 2,
    name: "농구화",
    quan: 1,
  },
];
function reducer(state = 초기값, 액션) {
  let copy = [...초기값];
  if (액션.type === "수량증가") {
    copy[0].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    copy[0].quan--;
    return copy;
  } else {
    // 변경사항이 없다면 초기값 리턴
    return state;
  }
}
let store = createStore(combineReducers({ reducer, reducerCart }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
