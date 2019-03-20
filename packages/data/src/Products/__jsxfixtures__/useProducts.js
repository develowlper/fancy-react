import React from 'react';
import { useProducts } from '..';
import { ArrayStats } from '@fancy-react/utils';

const Fixture = ({}) => {
  const products = useProducts();
  return <ArrayStats items={products} />;
};

export default <Fixture />;
