import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: []
}
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      let todoList = [...state.todoList];
      todoList.push(action.payload);

      return {
        ...state,
        todoList
      };
    },

    editTodo: (state, action) => {
      const { id, newName } = action.payload;

      let todoList = [...state.todoList];
      const itemIndex = todoList.findIndex(item => parseInt(item.id) === parseInt(id));
      let item = {...todoList[itemIndex]};
      item.item = newName;

      todoList[itemIndex] = item;

      return {
        ...state,
        todoList
      }
    },

    setCheck: (state, action) => {
      const todoList = state.todoList.map((item) => {
        const newItem = {...item};

        if (action.payload === newItem.id) {
          if (newItem.done === true) {
            newItem.done = false
          } else {
            newItem.done = true
          }
        }

        return newItem;
      });

      return {
        ...state,
        todoList
      }
    },
    removeTodos: (state, action) => {
      let todoList = [...state.todoList];

      todoList = todoList.filter(item => {
        return item.id !== action.payload
      });

      return {
        ...state,
        todoList
      }
    },
  }
});

export const { saveTodo, editTodo, setCheck, removeTodos } = todoSlice.actions;
export const selectTodoList = state => state.todos.todoList
export const selectTodoItem = id => state => state.todos.todoList.find(item => parseInt(item.id) === parseInt(id));
export default todoSlice.reducer