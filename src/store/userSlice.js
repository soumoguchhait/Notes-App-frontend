import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    image: "",
  },
  reducers: {
    setUserImage: (state, action) => {
      state.image = action.payload;
      
    },
  },
});
//console.log(userSlice.getInitialState());
export const { setUserImage } = userSlice.actions;

export default userSlice.reducer;