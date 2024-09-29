import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  //initial stage of variables

  addcart: [],
};

export const todoSlice = createSlice({
  //functions
  name: "bill",
  initialState,
  reducers: {
    addCart: (state, action) => {
      //function for adding items in cart
      const cartdata = action.payload;
      state.addcart.push(cartdata);
    },
  },
});

export const { addCart } = todoSlice.actions; // export all function

export default todoSlice.reducer;
