import React from 'react';
import { Context } from './provider';

console.log(Context);

const useProducts = () => {
  const products = React.useContext(Context);

  console.log(products);

  return products;
};

export { useProducts };
