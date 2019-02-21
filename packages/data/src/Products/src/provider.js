import React from 'react';
import { get } from './api';

const Context = React.createContext();

const Provider = ({ products: productsProp, children }) => {
  const [products, setProducts] = React.useState(productsProp);

  const fetchProducts = async () => {
    const data = await get();
    setProducts(data);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return <Context.Provider value={products}>{children}</Context.Provider>;
};

Provider.defaultProps = {
  products: null
};

export default Provider;

export { Context };
