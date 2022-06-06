/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoListElement.js
 * Date:  05/06/2022
 * Time:  16:01
 */

import { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoListElement extends Component {
  render() {
    const text = this.props.text;
    return (
      <div className="element">
        {text}
        <div>
          <button>Edit</button>
          <button>Remove</button>
        </div>
      </div>
    );
  }
}

TodoListElement.propsTypes = {
  text: PropTypes.string.isRequired
};
