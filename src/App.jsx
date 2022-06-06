import { Component } from 'react';
import TodoList from '@/components/TodoList';
import TodoSearch from '@/components/TodoSearch';
import './assets/style/App.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <TodoSearch />
        <hr />
        <TodoList />
      </div>
    );
  }
}
