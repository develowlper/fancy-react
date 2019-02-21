import React from 'react';
import { get } from './api';

const Context = React.createContext();

const Provider = ({ products: productsProp }) => {
  const [products, setProducts] = useState(productsProp);

  React.useEffect(async () => {
    setProducts(await get());
  }, []);

  return <Context.Provider value={products} />;
};

Provider.defaultProps = {
  products: null
};

export default Provider;

export { Context };
