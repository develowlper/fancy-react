import React from 'react';
import { Context } from './provider';

const useProducts = () => {
  return React.useContext(Context);
};

export { useProducts };
