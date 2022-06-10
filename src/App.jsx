import TodoForm from '@/Todo/components/TodoForm';
import TodoList from '@/Todo/components/TodoList';
import TodoSearch from '@/Todo/components/TodoSearch';
import '@/assets/style/App.scss';

export default function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <TodoSearch />
      <hr />
      <TodoForm />
      <hr />
      <TodoList />
    </div>
  );
}
