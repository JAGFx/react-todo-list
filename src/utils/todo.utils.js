/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  todo.utils.js
 * Date:  09/06/2022
 * Time:  19:17
 */
import { STATE } from '@/store/todo.store';

export const generateUuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );

export const generateTodoObject = (text, uuid = null, tags = [], state = STATE.TODO) => {
  return {
    uuid: uuid === null ? generateUuid() : uuid,
    text,
    tags,
    state
  };
};
