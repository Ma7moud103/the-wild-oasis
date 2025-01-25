import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpened: false
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    handleDisplayingMenu: (state, action) => {
      if (action.payload === "toggle") state.isMenuOpened = !state.isMenuOpened;
      else state.isMenuOpened = action.payload;
    }
  }
});

export const { handleDisplayingMenu } = uiSlice.actions;

export default uiSlice.reducer;
