/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  useApi.js
 * Date:  14/06/2022
 * Time:  19:35
 */

import { useState } from 'react';

const isPromise = (p) => {
  return (
    p !== null &&
    typeof p === 'object' &&
    typeof p.then === 'function' &&
    typeof p.catch === 'function'
  );
};

export default function useAsynchronous(asyncMethod) {
  const [loading, setLoading] = useState(false);

  const call = () => {
    setLoading(true);
    const result = asyncMethod();

    if (!isPromise(result)) {
      setLoading(false);
      throw new Error('The given async method do not return promise');
    }

    return result.finally(() => setLoading(false));
  };

  return [call, loading];
}
