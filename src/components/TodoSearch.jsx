/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn
 * file:  TodoSearch.js
 * Date:  05/06/2022
 * Time:  17:08
 */

import { setSearchQuery } from '@/redux/todo.store';
import { useSelector, useDispatch } from 'react-redux';

export default function TodoSearch() {
  const search = useSelector((state) => state.todos.search);
  const dispatch = useDispatch();

  return (
    <div className="todo-search">
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      <code>{search}</code>
    </div>
  );
}
