// import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Context1 } from "../App";

function Detail(props) {
  let {재고} = useContext(Context1); //보관함 해체해주는 함수
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useEffect(true);
  let [num, setNum] = useState("");
  let [탭, 탭변경] = useState(0);

  useEffect(() => {
    if (isNaN(num) === true) {
      alert("그러지마세요");
    }
  }, [num]);

  // mount될때만 실행됨
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      //useEffect 동작 전에 실행되는 코드
      clearTimeout(a); // 타이머 제거해주는 함수
    };
  });

  let { id } = useParams();
  let findGoods = props.shoes.find((x) => x.id === id);
  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findGoods.title}</h4>
          <p>{findGoods.content}</p>
          <p>{findGoods.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  탭변경(0);
                }}
                eventKey="link0"
              >
                버튼0
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  탭변경(1);
                }}
                on
                eventKey="link1"
              >
                버튼1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  탭변경(2);
                }}
                eventKey="link2"
              >
                버튼2
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent 탭={탭} />
        </div>
      </div>
    </div>
  );
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      //useEffect 실행전에 실행되는 코드
      setFade("");
    };
  }, [탭]);
  return (
    <div className={`start` + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
