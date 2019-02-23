import React from 'react';
import { useProducts } from '..';
import { ArrayStats } from '@fancy-react/utils';

console.log(ArrayStats);

const Fixture = ({}) => {
  const products = useProducts();
  return <ArrayStats items={products} />;
};

export default <Fixture />;
