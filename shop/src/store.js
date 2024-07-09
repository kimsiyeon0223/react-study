import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  //useState역할, 슬라이스라고 부름
  name: "user",
  initialState: "kim",
});

export default configureStore({
  reducer: {
    user: user.reducer, //state등록완료
  },
});
