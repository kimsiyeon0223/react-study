import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  //useState역할, 슬라이스라고 부름
  name: "user",
  initialState: "kim",
});

let stock = createSlice({
  //useState역할, 슬라이스라고 부름
  name: "user",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer, //state등록완료
    stock: stock.reducer,
    cart: cart.reducer,
  },
});

//redux store 안에 모든걸 넣진 말자
