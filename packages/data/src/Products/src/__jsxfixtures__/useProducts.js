import React from 'react';
import { useProducts } from '../hooks';

const Fixture = ({}) => {
  const products = useProducts();

  console.log(products);
  const count = products || null;

  return (
    <React.Suspense fallback={<div>Loading...</div>}>{count}</React.Suspense>
  );
};

export default <Fixture />;
