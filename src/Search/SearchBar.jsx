/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoSearch.js
 * Date:  05/06/2022
 * Time:  17:08
 */

import SearchFilters from '@/Search/SearchFilters';
import TodoForm from '@/Todo/components/TodoForm';
import { updateFilters } from '@/Todo/todo.store';
import { useEffect, useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
  const filters = useSelector((state) => state.todos.filters);
  const [search, setSearch] = useState(filters.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateFilters({
        search
      })
    );
  }, [search]);

  return (
    <Form>
      <div className="todo-search">
        <Stack gap="1">
          <Stack direction="horizontal" gap="2">
            <Form.Control
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <TodoForm />
          </Stack>
          <SearchFilters />
        </Stack>
      </div>
    </Form>
  );
}
