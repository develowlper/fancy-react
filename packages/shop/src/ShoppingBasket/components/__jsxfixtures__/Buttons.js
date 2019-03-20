import React, { useState } from 'react';
import AddToCart from '../AddButton';
import RemoveFromCart from '../RemoveButton';
import ResetCart from '../ResetButton';
import { useBasket } from '../../data';

const Fixture = () => {
  const basket = useBasket();
  const [lastAction, set] = useState('NONE');

  return (
    <React.Fragment>
      <div>{'items: ' + basket.length}</div>
      <div>{'last: ' + lastAction}</div>
      <AddToCart
        text="Add"
        product={{ sku: '1' }}
        onAdded={() => {
          set('ADD');
        }}
      />
      <RemoveFromCart
        text="Remove"
        index={0}
        onRemoved={() => {
          set('REMOVE');
        }}
      />
      <ResetCart
        text="Reset"
        onReset={() => {
          set('RESET');
        }}
      />
    </React.Fragment>
  );
};

export default <Fixture />;
