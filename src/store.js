import { configureStore } from "@reduxjs/toolkit";
import rafin from "../src/Slice/counterSlice";

export default configureStore({
  reducer: {
    prity: rafin,
  },
});
