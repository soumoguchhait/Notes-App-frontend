import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
// console.log(store.getState());
export default store;