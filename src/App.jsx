import '@/assets/style/App.scss';
import TodoForm from '@/Todo/components/TodoForm';
import TodoList from '@/Todo/components/TodoList';
import SearchField from '@/Search/SearchField';
import { Container, Stack } from 'react-bootstrap';

export default function App() {
  return (
    <Container className="p-3">
      <Stack gap="3">
        <header>
          <SearchField />
        </header>
        <Stack direction="horizontal" gap="2">
          <hr className="w-100" />
          <TodoForm />
          <hr className="w-100" />
        </Stack>
        <main>
          <TodoList />
        </main>
      </Stack>
    </Container>
  );
}
