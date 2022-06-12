/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	react-learn-3
 * file: 	TodoForm.js
 * Date: 	06/06/2022
 * Time: 	20:37
 */
import TodoTagChoiceInput from '@/Todo/components/TodoTagChoiceInput';
import { TAGS, addTodo } from '@/Todo/todo.store';
import { generateTodoObject } from '@/Todo/todo.utils';
import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
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

  const handleTagsInputChange = (tags) => {
    setTags(tags);
  };

  return (
    <>
      <Button className="rounded-circle" onClick={() => setShowDialog(true)}>
        +
      </Button>
      <Modal
        centered
        onHide={() => setShowDialog(false)}
        show={showDialog}
        size="lg">
        <Modal.Body className="form">
          <FloatingLabel label="Todo" className="mb-3">
            <Form.Control
              onChange={(e) => setInput(e.target.value)}
              placeholder="Do something..."
              type="text"
              value={input}
              required
            />
          </FloatingLabel>
          <Form.Group className="mb-3">
            <Form.Label>Tags</Form.Label>
            <TodoTagChoiceInput
              name="add-tags"
              onChange={handleTagsInputChange}
              tags={tags}
            />
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
