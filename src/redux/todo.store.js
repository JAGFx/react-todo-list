/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  todo.store.js
 * Date:  06/06/2022
 * Time:  19:50
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: ['This is', 'An element', 'Of list'],
  search: ''
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.unshift(action.payload);
    },
    removeTodo: (state, action) => {
      const start = state.list.slice(0, action.payload);
      const end = state.list.slice(action.payload + 1);
      state.list = start.concat(end);
    },
    setSearchQuery: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { addTodo, removeTodo, setSearchQuery } = todoSlice.actions;
export const filteredTodos = (state) =>
  state.todos.list.filter((todo) => todo.toLowerCase().includes(state.todos.search.toLowerCase()));
export default todoSlice.reducer;
