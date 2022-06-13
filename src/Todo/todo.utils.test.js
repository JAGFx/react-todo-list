/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  todo.utils.test.js
 * Date:  12/06/2022
 * Time:  21:46
 */

import { STATE } from '@/Todo/todo.constantes.js';
import {
  applyFiltersOnTodoList,
  generateTodoObject
} from '@/Todo/todo.utils.js';

const generateTodoForTest = (
  text = 'my text',
  uuid = 'my-uuid',
  tags = [],
  state = STATE.TODO
) => {
  return { text, uuid, tags, state };
};

const generateFilter = (search = '', tags = [], showCompleted = true) => {
  return { search, tags, showCompleted };
};

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
      expect(generatedTodoObject).toHaveProperty('uuid');

      if (uuid === null) {
        expect(typeof generatedTodoObject.uuid).toBe('string');
      } else {
        expect(generatedTodoObject.uuid).toBe(uuid);
      }
    }
  );
});

describe('Apply filters', () => {
  const wrongFiltersData = [
    {},
    { search: '' },
    { search: '', tags: [''] },
    { toto: false }
  ];

  test.each(wrongFiltersData)(
    'An error must be thrown with invalid filters data',
    (wrongFilter) => {
      expect(() =>
        applyFiltersOnTodoList([generateTodoForTest()], wrongFilter)
      ).toThrow(/entry was not found on todo filters/);
    }
  );

  const todoForFieldMatches = [
    generateTodoForTest('my text'),
    generateTodoForTest('My Text'),
    generateTodoForTest('another text', 'uuid', ['tag'], STATE.DONE),
    generateTodoForTest('awesome text', 'uuid2', ['tag1'])
  ];
  const todoTextPropertySearch = [
    generateFilter('my text'),
    generateFilter('MY TEXT'),
    generateFilter('mY tEXT')
  ];

  test.each(todoTextPropertySearch)(
    'Filter todo list must not be case sensitive on text field',
    (filter) => {
      const resultFilter = applyFiltersOnTodoList(todoForFieldMatches, filter);

      expect(resultFilter).toHaveLength(2);
      resultFilter.map((todo) =>
        expect(todo.text.toLowerCase()).toEqual('my text')
      );
    }
  );

  test('Filter todo list must contain tag', () => {
    const resultFilter = applyFiltersOnTodoList(
      todoForFieldMatches,
      generateFilter('', ['tag'])
    );

    expect(resultFilter).toHaveLength(1);
    expect(resultFilter[0]).toMatchObject(
      generateTodoForTest('another text', 'uuid', ['tag'], STATE.DONE)
    );
  });

  test('Filter todo list must return only uncompleted todo', () => {
    const resultFilter = applyFiltersOnTodoList(
      todoForFieldMatches,
      generateFilter('my text', [], false)
    );

    expect(resultFilter).toHaveLength(2);
    resultFilter.map((todo) =>
      expect(todo.text.toLowerCase()).toEqual('my text')
    );
  });

  test('Filter todo list must match with multi parameters', () => {
    const resultFilter = applyFiltersOnTodoList(
      todoForFieldMatches,
      generateFilter('awesome text', ['tag1'], false)
    );

    expect(resultFilter).toHaveLength(1);
    expect(resultFilter[0]).toMatchObject(
      generateTodoForTest('awesome text', 'uuid2', ['tag1'])
    );
  });

  test('No tag must be return with no matching filters', () => {
    const resultFilter = applyFiltersOnTodoList(
      todoForFieldMatches,
      generateFilter('unicorn world', ['bisounours'], false)
    );

    expect(resultFilter).toHaveLength(0);
  });
});
