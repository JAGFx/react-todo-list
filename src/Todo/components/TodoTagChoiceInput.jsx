/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  TodoSelectOption.js
 * Date:  09/06/2022
 * Time:  19:21
 */
import { TAGS } from '@/Todo/todo.store';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function TodoTagChoiceInput({ tags, onChange }) {
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
          id={tag}
          key={tag}
          label={tag}
          name={tag}
          type="checkbox"
          value={tag}
          checked={checkedState.indexOf(tag) !== -1}
          onChange={(e) => handleOnChange(e, tag)}
        />
      ))}
    </>
  );
}

TodoTagChoiceInput.propTypes = {
  tags: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
