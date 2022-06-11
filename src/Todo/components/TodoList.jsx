/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoList.js
 * Date:  05/06/2022
 * Time:  15:36
 */

import TodoListElement from '@/Todo/components/TodoListElement';
import { filteredTodos } from '@/Todo/todo.store';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    list: filteredTodos(state)
  };
};

function TodoList({ list }) {
  return (
    <ListGroup className="todo-list">
      {list.map((todo) => (
        <TodoListElement
          key={todo.uuid}
          state={todo.state}
          tags={todo.tags}
          text={todo.text}
          uuid={todo.uuid}
        />
      ))}
    </ListGroup>
  );
}

TodoList.propTypes = {
  list: PropTypes.array
};

export default connect(mapStateToProps)(TodoList);
