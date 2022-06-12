/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  generator.utils.test.js
 * Date:  12/06/2022
 * Time:  11:18
 */

import { generateUuid } from '@/shared/generator.utils';

describe('Generator utils test', () => {
  describe('Generate UUID', () => {
    test('Generated UUID is a string as 36 chars', () => {
      const uuid = generateUuid();
      expect(typeof uuid).toEqual('string');
      expect(uuid).toHaveLength(36);
    });

    test('Generated UUID match to format', () => {
      const uuid = generateUuid();
      const regex = /^(\w{8})-(\w{4})-(\w{4})-(\w{4})-(\w{12})$/;

      expect(regex.test(uuid)).toBeTruthy();
    });
  });
});
