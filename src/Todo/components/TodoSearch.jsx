/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoSearch.js
 * Date:  05/06/2022
 * Time:  17:08
 */

import TodoTagSelectOptions from '@/Todo/components/TodoTagSelectOptions';
import { updateFilters } from '@/Todo/todo.store';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function TodoSearch() {
  const filters = useSelector((state) => state.todos.filters);
  const [search, setSearch] = useState(filters.search);
  const [tags, setTags] = useState(filters.tags);
  const dispatch = useDispatch();

  const handleTagsChange = (e) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags(value);
  };

  const onClickReset = () => {
    setSearch('');
    setTags([]);
  };

  useEffect(() => {
    dispatch(
      updateFilters({
        search,
        tags
      })
    );
  }, [search, tags]);

  return (
    <div className="todo-search">
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <select multiple={true} value={tags} onChange={handleTagsChange}>
        <TodoTagSelectOptions />
      </select>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
}
