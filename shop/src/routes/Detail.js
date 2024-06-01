// import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// // 옛날 컴포넌트 문법
// class Detail2 extends React.Component {
//   componentDidMount() {
//     // 컴포넌트 마운트 될때 실행됨
//   }
//   componentDidUpdate() {
//     // 컴포넌트 update시 코드 실행됨
//   }
//   componentWillUnmount() {
//     // 컴포넌트 언마운트시 코드 실행됨
//   }
// }

function Detail(props) {
  // mount, update(재랜더링)시 코드 실행해주는 useEffect
  // useEffect 안에 있는 코드는 html 랜더링 후 동작한다.
  // useEffect 안에 적는 코드들은 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착하는거
  useEffect(() => {
    console.log("안녕");
  });

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useEffect(true);

  // mount될때만 실행됨
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

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
        </div>
      </div>
    </div>
  );
}

export default Detail;
