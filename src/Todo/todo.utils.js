/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  todo.utils.js
 * Date:  09/06/2022
 * Time:  19:17
 */
import { generateUuid } from '@/shared/generator.utils';
import { STATE } from '@/Todo/todo.constantes.js';

export const generateTodoObject = (
  text,
  uuid = null,
  tags = [],
  state = STATE.TODO
) => {
  return {
    uuid: uuid === null ? generateUuid() : uuid,
    text,
    tags,
    state
  };
};

export const applyFiltersOnTodoList = (list, filters) => {
  return list.filter((todo) => {
    if (!Object.hasOwn(filters, 'search'))
      throw new Error('Search entry was not found on todo filters');

    if (!Object.hasOwn(filters, 'tags'))
      throw new Error('Tags entry was not found on todo filters');

    if (!Object.hasOwn(filters, 'showCompleted'))
      throw new Error('showCompleted entry was not found on todo filters');

    const filterMatches = [true];

    if (filters.search.length !== 0) {
      filterMatches.push(
        todo.text.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.tags.length !== 0) {
      filterMatches.push(
        todo.tags.some((tag) => filters.tags.indexOf(tag) >= 0)
      );
    }

    if (!filters.showCompleted) {
      filterMatches.push(todo.state !== STATE.DONE);
    }

    return filterMatches.every((match) => match);
  });
};
