import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let state = useSelector(
    (state /*store안에 있는 모든 state를 뜻함*/) => state,
  ); //useSelect() -> redux store를 가져와줌
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{state.cart[1].name}</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
