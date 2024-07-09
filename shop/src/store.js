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

export default configureStore({
  reducer: {
    user: user.reducer, //state등록완료
    stock: stock.reducer,
  },
});


//redux store 안에 모든걸 넣진 말자