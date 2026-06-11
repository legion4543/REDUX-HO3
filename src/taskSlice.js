import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      if (action.payload.trim() !== "") {
        state.taskList.push(action.payload);
      }
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;