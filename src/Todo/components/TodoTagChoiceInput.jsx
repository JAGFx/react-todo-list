/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  TodoSelectOption.js
 * Date:  09/06/2022
 * Time:  19:21
 */
import { TAGS } from '@/Todo/todo.constantes.js';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function TodoTagChoiceInput({
  name = 'tags-in',
  tags,
  onChange
}) {
  const [checkedState, setCheckedState] = useState([...tags]);

  const handleOnChange = (event, tag) => {
    let states = [...checkedState];
    if (event.target.checked) {
      states.push(tag);
    } else {
      states = states.filter((currentTag) => currentTag !== tag);
    }
    setCheckedState(states);
    onChange(states);
  };

  return (
    <>
      {Object.values(TAGS).map((tag) => (
        <Form.Check
          id={name + tag}
          key={tag}
          label={tag}
          type="checkbox"
          value={tag}
          checked={tags.indexOf(tag) !== -1}
          onChange={(e) => handleOnChange(e, tag)}
        />
      ))}
    </>
  );
}

TodoTagChoiceInput.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
