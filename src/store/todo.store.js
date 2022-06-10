/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  todo.store.js
 * Date:  06/06/2022
 * Time:  19:50
 */

import { applyFiltersOnTodoList, generateTodoObject } from '@/utils/todo.utils';
import { createSlice } from '@reduxjs/toolkit';

export const STATE = {
  TODO: 'todo',
  DONE: 'done'
};

export const TAGS = {
  CAT1: 'cat1',
  CAT2: 'cat2',
  CAT3: 'cat3'
};

const initialState = {
  list: [
    generateTodoObject('This is', null, [TAGS.CAT1]),
    generateTodoObject('An awesome', null, [TAGS.CAT2]),
    generateTodoObject('Stuff to do', null, [TAGS.CAT1, TAGS.CAT3])
  ],
  filters: {
    search: '',
    tags: []
  }
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.unshift(action.payload);
    },
    removeTodo: (state, action) => {
      const index = state.list.findIndex((todo) => (todo.uuid = action.payload));

      if (index !== -1) {
        const start = state.list.slice(0, index);
        const end = state.list.slice(index + 1);
        state.list = start.concat(end);
      }
    },
    updateFilters: (state, action) => {
      state.filters = {
        search: action.payload.search,
        tags: [...action.payload.tags]
      };
    },
    updateTodo: (state, action) => {
      const uuid = action.payload.uuid;
      const todo = state.list.filter((todo) => todo.uuid === uuid);

      if (todo !== undefined) {
        state.list.map((todo) => (todo.uuid === uuid ? Object.assign(todo, action.payload) : todo));
      }
    }
  }
});

export const { addTodo, removeTodo, updateFilters, updateTodo } = todoSlice.actions;
export const filteredTodos = (state) =>
  applyFiltersOnTodoList(state.todos.list, state.todos.filters);

export default todoSlice.reducer;
