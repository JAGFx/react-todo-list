/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  randomizer.api.js
 * Date:  13/06/2022
 * Time:  21:55
 */
import axios from 'axios';

export const host = 'https://baconipsum.com/api/';

export const getRandomString = () => {
  return new Promise((resolve, reject) => {
    const query = new URLSearchParams({
      type: 'meat-and-filler',
      sentences: 1
    });
    const url = `${host}?${query.toString()}`;

    axios
      .get(url)
      .then((response) => {
        resolve(response.data[0]);
      })
      .catch((e) => reject(e));
  });
};
