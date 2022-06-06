/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoList.js
 * Date:  05/06/2022
 * Time:  15:36
 */

import { Component } from 'react';
import TodoListElement from '@/components/TodoListElement';

export default class TodoList extends Component {
  render() {
    const list = ['This is', 'An element', 'Of list'];
    const listItem = list.map((element) => <TodoListElement text={element} key={element} />);

    return <div className="todo-list">{listItem}</div>;
  }
}
