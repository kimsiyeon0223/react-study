import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  let finGoods = props.shoes.find(function (x) {
    return x.id == id;
  });
  return (
    <div className="container">
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{finGoods.title}</h4>
          <p>{finGoods.content}</p>
          <p>{finGoods.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
