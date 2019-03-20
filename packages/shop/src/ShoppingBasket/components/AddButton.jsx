import React, { useState } from 'react';
import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { useAdd } from '../data/hooks';
const Button = ({ text, product, onAdded }) => {
  const add = useAdd();

  const click = () => {
    add(product);
    if (onAdded) {
      onAdded();
    }
  };

  return (
    <MuiButton color="primary" variant="contained" onClick={click}>
      {text}
    </MuiButton>
  );
};

Button.defaultProps = {
  onAdded: undefined
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  product: PropTypes.shape({
    sku: PropTypes.string
  }).isRequired,
  onAdded: PropTypes.func
};

export default Button;
