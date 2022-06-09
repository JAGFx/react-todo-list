/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoListElement.js
 * Date:  05/06/2022
 * Time:  16:01
 */

import { removeTodo, STATE, updateTodo } from '@/store/todo.store';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function TodoListElement({ uuid, text, state, tags = [] }) {
  const dispatch = useDispatch();

  return (
    <div className={'element ' + state}>
      <span className="todo-label">{text}</span>
      <div>
        <button onClick={() => dispatch(removeTodo(uuid))}>Remove</button>
        <button
          onClick={() =>
            dispatch(
              updateTodo({
                uuid,
                state: STATE.DONE
              })
            )
          }>
          Done
        </button>
      </div>
      <div>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

TodoListElement.propTypes = {
  uuid: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};
