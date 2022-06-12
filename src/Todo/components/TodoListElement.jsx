/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoListElement.js
 * Date:  05/06/2022
 * Time:  16:01
 */

import { STATE, removeTodo, updateTodo } from '@/Todo/todo.store';
import PropTypes from 'prop-types';
import { Button, ListGroup, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function TodoListElement({ uuid, text, state, tags = [] }) {
  const dispatch = useDispatch();

  const listProps = () => {
    const props = {};

    if (state === STATE.DONE)
      return {
        ...props,
        variant: 'secondary'
      };

    return props;
  };

  const tagBadgeClass = () => {
    return state === STATE.DONE ? 'bg-secondary' : 'bg-primary';
  };

  return (
    <ListGroup.Item className={`element ${state}`} {...listProps()}>
      <Stack direction="horizontal" gap="2">
        <Stack gap="2">
          <Stack direction="horizontal" gap="2">
            {tags.map((tag) => (
              <span
                className={'badge rounded-pill ' + tagBadgeClass()}
                key={tag}>
                {tag}
              </span>
            ))}
          </Stack>
          <span className="todo-label">{text}</span>
        </Stack>
        <Stack direction="horizontal" gap="2">
          <Button
            onClick={() => dispatch(removeTodo(uuid))}
            size="xs"
            variant="outline-danger">
            <i className="fa-solid fa-trash-can" />
          </Button>
          {state !== STATE.DONE && (
            <Button
              onClick={() =>
                dispatch(
                  updateTodo({
                    uuid,
                    state: STATE.DONE
                  })
                )
              }
              size="xs"
              variant="outline-success">
              <i className="fa-solid fa-check" />
            </Button>
          )}
        </Stack>
      </Stack>
    </ListGroup.Item>
  );
}

TodoListElement.propTypes = {
  uuid: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};
