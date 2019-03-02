import { createContext } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

import { useStore } from '@fancy-react/data';

const Context = createContext();

const Store = ({ basket: initialBasket, children }) => {
  const store = useStore(initialBasket, reducer);

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

Store.defaultProps = {
  basket: []
};

Store.propTypes = {
  basket: PropTypes.array,
  children: PropTypes.node.isRequired
};

export default Store;

export { Context as BasketContext };
