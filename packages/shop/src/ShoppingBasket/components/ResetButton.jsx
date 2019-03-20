import React, { useState } from 'react';
import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { useReset } from '../data/hooks';
const Button = ({ text, onReset }) => {
  const reset = useReset();

  const click = () => {
    reset();
    if (onReset) {
      onReset();
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
