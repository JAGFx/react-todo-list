/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoSearch.js
 * Date:  05/06/2022
 * Time:  17:08
 */

import SearchFilters from '@/Search/SearchFilters';
import { hasFilters, updateFilters } from '@/Todo/todo.store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, FloatingLabel, Form, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchField() {
  const filters = useSelector((state) => state.todos.filters);
  const hasFiltersActive = useSelector((state) => hasFilters(state));
  const dispatch = useDispatch();

  const onClickReset = () => {
    dispatch(
      updateFilters({
        search: '',
        tags: [],
        showCompleted: false
      })
    );
  };

  return (
    <Form className="todo-search">
      <Stack gap="1">
        <Stack direction="horizontal" gap="2">
          <FloatingLabel label="Search" className="w-100">
            <Form.Control
              onChange={(e) => {
                dispatch(updateFilters({ search: e.target.value }));
              }}
              type="text"
              value={filters.search}
            />
          </FloatingLabel>
          {hasFiltersActive ? (
            <Button className="rounded-circle" onClick={onClickReset}>
              <FontAwesomeIcon icon="xmark" />
            </Button>
          ) : null}
        </Stack>
        <SearchFilters />
      </Stack>
    </Form>
  );
}
