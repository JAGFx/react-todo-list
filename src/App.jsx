import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import TodoSearch from '@/components/TodoSearch';
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
