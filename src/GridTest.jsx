import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const styles = {
  root: {
    display: 'grid',
    height: '700px'
  },
  item: {
    background: '#FF0000',
    justifySelf: 'center',
    alignSelf: 'center'
  }
};

const useStyles = makeStyles(styles);

const GridTest = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.item}>TEST</div>
    </div>
  );
};
export default GridTest;
