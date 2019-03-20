import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { useProducts } from '@fancy-react/data';

const App = () => {
  const products = useProducts();
  const count = products ? products.length : -1;

  return <div>{count}</div>;
};

export default App;
