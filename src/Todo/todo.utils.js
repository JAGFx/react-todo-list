/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  todo.utils.js
 * Date:  09/06/2022
 * Time:  19:17
 */
import { generateUuid } from '@/shared/generator.utils';
import { STATE } from '@/Todo/todo.store';

export const generateTodoObject = (text, uuid = null, tags = [], state = STATE.TODO) => {
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

    let filterMatches = [true];

    if (filters.search.length !== 0) {
      filterMatches.push(todo.text.toLowerCase().includes(filters.search.toLowerCase()));
    }

    if (filters.tags.length !== 0) {
      filterMatches.push(todo.tags.some((tag) => filters.tags.indexOf(tag) >= 0));
    }

    return filterMatches.every((match) => match);
  });
};
