import { useContext } from 'react';

import { BasketContext } from './store';

const useBasket = () => {
  const { store } = useContext(BasketContext);
  return store;
};

const useAdd = () => {
  const { add } = useContext(BasketContext);
  return add;
};

const useRemove = () => {
  const { remove } = useContext(BasketContext);
  return remove;
};

const useReset = () => {
  const { reset } = useContext(BasketContext);
  return reset;
};

export { useBasket, useAdd, useRemove, useReset };
