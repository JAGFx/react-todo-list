/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoSearch.js
 * Date:  05/06/2022
 * Time:  17:08
 */
import { Component } from 'react';

export default class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="todo-search">
        <input
          type="search"
          placeholder="Search..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <code>{this.state.value}</code>
      </div>
    );
  }
}
