/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoSearch.js
 * Date:  05/06/2022
 * Time:  17:08
 */

import SearchFilters from '@/Search/SearchFilters';
import { hasFilters, updateFilters } from '@/Todo/todo.store';
import { Button, Form, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchField() {
  const filters = useSelector((state) => state.todos.filters);
  const hasFiltersActive = useSelector((state) => hasFilters(state));
  const dispatch = useDispatch();

  const onClickReset = () => {
    dispatch(
      updateFilters({
        search: '',
        tags: []
      })
    );
  };

  return (
    <Form className="todo-search">
      <Stack gap="1">
        <Stack direction="horizontal" gap="2">
          <Form.Control
            onChange={(e) => {
              dispatch(updateFilters({ search: e.target.value }));
            }}
            placeholder="Search..."
            type="search"
            value={filters.search}
          />
          {hasFiltersActive ? (
            <Button className="rounded-circle" onClick={onClickReset}>
              <i className="fa-solid fa-xmark" />
            </Button>
          ) : null}
        </Stack>
        <SearchFilters />
      </Stack>
    </Form>
  );
}
