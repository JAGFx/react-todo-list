/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	react-learn-3
 * file: 	TodoForm.js
 * Date: 	06/06/2022
 * Time: 	20:37
 */
import TodoTagSelectOptions from '@/Todo/components/TodoTagSelectOptions';
import { addTodo, TAGS } from '@/Todo/todo.store';
import { generateTodoObject } from '@/Todo/todo.utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function TodoForm() {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([TAGS.CAT1]);
  const dispatch = useDispatch();

  const onClickAddTodo = () => {
    dispatch(addTodo(generateTodoObject(input, null, tags)));
  };

  const handleTagsInputChange = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags(value);
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Add todo"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <select multiple={true} value={tags} onChange={handleTagsInputChange}>
        <TodoTagSelectOptions />
      </select>
      <button onClick={onClickAddTodo}>Add</button>
    </div>
  );
}
