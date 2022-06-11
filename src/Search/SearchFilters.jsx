/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  SearchBar.jsx
 * Date:  11/06/2022
 * Time:  09:53
 */

import SearchFilterDropdownButton from '@/Search/SearchFilterDropdownButton';
import SearchFilterDropdownContent from '@/Search/SearchFilterDropdownContent';
import SearchFiltersActiveRow from '@/Search/SearchFiltersActiveRow';
import TodoTagChoiceInput from '@/Todo/components/TodoTagChoiceInput';
import { updateFilters } from '@/Todo/todo.store';
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchFilters() {
  const filters = useSelector((state) => state.todos.filters);
  const [showCategories, setShowCategories] = useState(false);
  const dispatch = useDispatch();

  const handleTagsChange = (tags) => {
    dispatch(
      updateFilters({
        tags
      })
    );
  };

  return (
    <>
      <Stack className="search-links p-2" direction="horizontal" gap="2">
        <SearchFilterDropdownButton
          label="Categories"
          onShow={(show) => setShowCategories(show)}
        />
        <SearchFiltersActiveRow />
      </Stack>
      <SearchFilterDropdownContent show={showCategories}>
        <TodoTagChoiceInput onChange={handleTagsChange} tags={filters.tags} />
      </SearchFilterDropdownContent>
    </>
  );
}
