import React from 'react';
import { useProducts } from '../hooks';

const Test = ({ count }) => {
  return <div>{count}</div>;
};

const Fixture = ({}) => {
  const products = useProducts();

  console.log(products);
  const count = null; // products ? products.length : null;

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {count && <Test count={count} />}
    </React.Suspense>
  );
};

export default <Fixture />;
