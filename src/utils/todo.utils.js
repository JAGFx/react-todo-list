/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  todo.utils.js
 * Date:  09/06/2022
 * Time:  19:17
 */
import { STATE } from '@/store/todo.store';
import { generateUuid } from '@/utils/generator.utils';

export const generateTodoObject = (text, uuid = null, tags = [], state = STATE.TODO) => {
  return {
    uuid: uuid === null ? generateUuid() : uuid,
    text,
    tags,
    state
  };
};
