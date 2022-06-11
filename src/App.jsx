import '@/assets/style/App.scss';
import TodoList from '@/Todo/components/TodoList';
import SearchBar from '@/Search/SearchBar';
import { Container, Stack } from 'react-bootstrap';

export default function App() {
  return (
    <Container className="p-3">
      <Stack gap="3">
        <nav>Plop</nav>
        <header>
          <SearchBar />
        </header>
        {/*<TodoForm />*/}
        <main>
          <TodoList />
        </main>
      </Stack>
    </Container>
  );
}
