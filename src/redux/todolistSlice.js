import { createSlice } from "@reduxjs/toolkit";

const todolistSlice = createSlice({
  name: "todolist",
  initialState: {
    todoArray: [],
  },
  reducers: {
    addtodo(state, action) {
      state.todoArray.push(action.payload);
    },
    filtertodo(state, action) {
      const newarray = state.todoArray.filter((e) => e.id !== action.payload);
      return {
        todoArray: newarray,
      };
    },
  },
});

export const { addtodo, filtertodo } = todolistSlice.actions;
export default todolistSlice.reducer;
