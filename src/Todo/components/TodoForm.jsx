/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	react-learn-3
 * file: 	TodoForm.js
 * Date: 	06/06/2022
 * Time: 	20:37
 */
import { getRandomObjectProperty } from '@/shared/generator.utils.js';
import { getRandomString } from '@/shared/randomizer.api.js';
import useAsynchronous from '@/shared/useAsynchronous.js';
import TodoTagChoiceInput from '@/Todo/components/TodoTagChoiceInput';
import { TAGS } from '@/Todo/todo.constantes.js';
import { addTodo } from '@/Todo/todo.store';
import { generateTodoObject } from '@/Todo/todo.utils';
import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function TodoForm() {
  const [showDialog, setShowDialog] = useState(false);
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([TAGS.CAT1]);
  const [callRandomizeString, loading] = useAsynchronous(getRandomString);
  const dispatch = useDispatch();

  const onClickAddTodo = () => {
    setShowDialog(false);
    dispatch(addTodo(generateTodoObject(input, null, tags)));
  };

  const onClickRandomize = () => {
    callRandomizeString().then((text) => {
      setInput(text);
      setTags([getRandomObjectProperty(TAGS)]);
    });
  };

  const onHideModal = () => {
    setShowDialog(false);
    setInput('');
    setTags([TAGS.CAT1]);
  };

  return (
    <>
      <Button className="rounded-circle" onClick={() => setShowDialog(true)}>
        +
      </Button>
      <Modal centered onHide={onHideModal} show={showDialog} size="lg">
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
              onChange={(tags) => setTags(tags)}
              tags={tags}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={!loading ? onClickRandomize : null}
            disabled={loading}
            size="sm"
            variant="secondary">
            {loading ? 'Loading…' : 'Randomize'}
          </Button>

          <Button onClick={onClickAddTodo} size="sm">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
