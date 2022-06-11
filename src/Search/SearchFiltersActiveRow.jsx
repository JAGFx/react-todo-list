import { Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';

/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  SearchFiltersActiveRow.jsx
 * Date:  11/06/2022
 * Time:  19:14
 */

export default function SearchFiltersActiveRow() {
  const filters = useSelector((state) => state.todos.filters);

  return (
    <Stack direction="horizontal" gap="2">
      {filters.tags.map((tag) => {
        return (
          <span className="badge rounded-pill bg-primary" key={tag}>
            {tag}
          </span>
        );
      })}
    </Stack>
  );
}
