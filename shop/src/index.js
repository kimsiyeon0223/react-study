import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    {/*자식 컴포넌트들은 store에 있는 state를 전부 사용할 수 있다.*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
