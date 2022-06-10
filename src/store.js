/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	react-learn-3
 * file: 	store.js
 * Date: 	06/06/2022
 * Time: 	20:03
 */

import todoSlice from '@/Todo/todo.store';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    todos: todoSlice
  }
});
