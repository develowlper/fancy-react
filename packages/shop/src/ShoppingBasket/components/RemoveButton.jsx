import React, { useState } from 'react';
import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { useRemove } from '../data/hooks';
const Button = ({ text, index, onRemoved }) => {
  const remove = useRemove();

  const click = () => {
    remove(index);
    if (onRemoved) {
      onRemoved();
    }
  };

  return (
    <MuiButton color="primary" variant="contained" onClick={click}>
      {text}
    </MuiButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  product: PropTypes.shape({
    sku: PropTypes.string
  }),
  onAdded: PropTypes.func
};

export default Button;
