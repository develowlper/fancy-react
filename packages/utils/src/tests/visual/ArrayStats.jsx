import React from 'react';
import PropTypes from 'prop-types';

const ArrayStats = ({ items }) => {
  return items ? <div>Items: {items.length}</div> : <div>No Items</div>;
};

ArrayStats.propTypes = {
  items: PropTypes.array
};

export default ArrayStats;
