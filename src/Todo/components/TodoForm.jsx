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
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function TodoForm() {
  const [showDialog, setShowDialog] = useState(false);
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([TAGS.CAT1]);
  const dispatch = useDispatch();

  const onClickAddTodo = () => {
    setShowDialog(false);
    dispatch(addTodo(generateTodoObject(input, null, tags)));
  };

  const handleTagsInputChange = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags(value);
  };

  return (
    <>
      <Button className="rounded-circle" onClick={() => setShowDialog(true)}>
        +
      </Button>
      <Modal size="lg" centered show={showDialog} onHide={() => setShowDialog(false)}>
        <Modal.Body className="form">
          <Form.Group className="mb-3">
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Do something..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tags</Form.Label>
            <Form.Select multiple={true} value={tags} onChange={handleTagsInputChange}>
              <TodoTagSelectOptions />
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClickAddTodo} size="sm">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
