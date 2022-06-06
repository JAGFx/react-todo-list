/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoList.js
 * Date:  05/06/2022
 * Time:  15:36
 */

import TodoListElement from '@/components/TodoListElement';
import { filteredTodos } from '@/redux/todo.store';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    list: filteredTodos(state)
  };
};

function TodoList({ list }) {
  const listItem = list.map((element, index) => (
    <TodoListElement id={index} text={element} key={element} />
  ));

  return <div className="todo-list">{listItem}</div>;
}

TodoList.propTypes = {
  list: PropTypes.array
};

export default connect(mapStateToProps)(TodoList);
