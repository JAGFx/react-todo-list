/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  SearchBar.jsx
 * Date:  11/06/2022
 * Time:  09:53
 */

import TodoTagSelectOptions from '@/Todo/components/TodoTagSelectOptions';
import { updateFilters } from '@/Todo/todo.store';
import { useEffect, useState } from 'react';
import { Button, Card, Collapse, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchFilters() {
  const filters = useSelector((state) => state.todos.filters);
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState(filters.search);
  const [tags, setTags] = useState(filters.tags);
  const dispatch = useDispatch();

  const onClickReset = () => {
    setSearch('');
    setTags([]);
  };

  const handleTagsChange = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags(value);
  };

  useEffect(() => {
    dispatch(
      updateFilters({
        tags
      })
    );
  }, [tags]);

  return (
    <>
      <div className="search-links d-flex justify-content-between">
        <div>
          <div className="search-link p-2" onClick={() => setShowFilters(!showFilters)}>
            <small>Filters</small>
            {showFilters ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </div>
        </div>
        <Button className="my-2" variant="outline-primary" size="xs" onClick={onClickReset}>
          Reset
        </Button>
      </div>
      <Collapse in={showFilters}>
        <Card>
          <Form.Select multiple={true} value={tags} onChange={handleTagsChange}>
            <TodoTagSelectOptions />
          </Form.Select>
        </Card>
      </Collapse>
    </>
  );
}
