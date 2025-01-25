import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./redux/UiSlice";

export const Store = configureStore({
  reducer: {
    ui: uiReducer
  }
});
