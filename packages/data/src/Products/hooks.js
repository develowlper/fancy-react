import React from 'react';
import { Context } from './provider';

const useProducts = () => {
  const products = React.useContext(Context);

  console.log(products);

  return products;
};

export { useProducts };
