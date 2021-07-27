import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

const listSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    saveTask: (state, action) => {
      state.todoList.push(action.payload)

    }
  }
});

export const {saveTask } = listSlice.actions
export default listSlice.reducer