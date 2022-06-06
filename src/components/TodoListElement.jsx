/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoListElement.js
 * Date:  05/06/2022
 * Time:  16:01
 */

import { removeTodo } from '@/redux/todo.store';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function TodoListElement({ id, text }) {
  const dispatch = useDispatch();

  function onClickRemove() {
    dispatch(removeTodo(id));
  }

  return (
    <div className="element">
      {text}
      <div>
        <button onClick={onClickRemove}>Remove</button>
      </div>
    </div>
  );
}

TodoListElement.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
