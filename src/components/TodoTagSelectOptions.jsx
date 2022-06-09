/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  TodoSelectOption.js
 * Date:  09/06/2022
 * Time:  19:21
 */
import { TAGS } from '@/store/todo.store';

export default function TodoTagSelectOptions() {
  return (
    <>
      <option value={TAGS.CAT1}>Cat1</option>
      <option value={TAGS.CAT2}>Cat2</option>
      <option value={TAGS.CAT3}>Cat3</option>
    </>
  );
}
