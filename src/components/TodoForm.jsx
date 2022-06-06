/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	react-learn-3
 * file: 	TodoForm.js
 * Date: 	06/06/2022
 * Time: 	20:37
 */
import { addTodo } from '@/redux/todo.store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function onAddTodo() {
    dispatch(addTodo(input));
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Add todo"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
}
