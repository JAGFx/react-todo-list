/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  todo.utils.test.js
 * Date:  12/06/2022
 * Time:  21:46
 */

import { STATE } from '@/Todo/todo.constantes.js';
import { generateTodoObject } from '@/Todo/todo.utils.js';

describe('Todo utils', () => {
  const dataForGenerationTodoObject = [null, 'my_uuid'];
  test.each(dataForGenerationTodoObject)(
    'Generated Todo object must have required fields',
    (uuid) => {
      const text = 'the text';
      const tags = ['tags1'];
      const state = STATE.TODO;
      const generatedTodoObject = generateTodoObject(text, uuid, tags, state);

      expect(typeof generatedTodoObject).toBe('object');
      expect(generatedTodoObject).toMatchObject({ text, tags, state });
      expect(Object.hasOwn(generatedTodoObject, 'uuid')).toBeTruthy();

      if (uuid === null) {
        expect(typeof generatedTodoObject.uuid).toBe('string');
      } else {
        expect(generatedTodoObject.uuid).toBe(uuid);
      }
    }
  );
});
