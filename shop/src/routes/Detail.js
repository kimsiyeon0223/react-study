import React from "react";
import { useParams } from "react-router-dom";

// 옛날 컴포넌트 문법
class Detail2 extends React.Component {
  componentDidMount() {
    // 컴포넌트 마운트 될때 실행됨
  }
  componentDidUpdate() {
    // 컴포넌트 update시 코드 실행됨
  }
  componentWillUnmount() {
    // 컴포넌트 언마운트시 코드 실행됨
  }
}

function Detail(props) {
  let { id } = useParams();
  let findGoods = props.shoes.find((x) => x.id == id);
  return (
    <div className="container">
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
