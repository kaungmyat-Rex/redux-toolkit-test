import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./counterslice";
import todolistSlice from "./todolistSlice";

export default configureStore({
  reducer: { counter: counterslice, todolist: todolistSlice },
});
