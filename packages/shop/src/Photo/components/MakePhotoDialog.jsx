import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const style = {
  paper: {
    background: '#FFFFFF'
  }
};

const useStyles = makeStyles(style);

const MakePhotoDialog = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Modal open={open}>
      <div class={classes.paper}>
        <div>MOIN</div>
        <Button color="primary" variant="contained" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

MakePhotoDialog.defaultProps = {};

MakePhotoDialog.propTypes = {};

export default MakePhotoDialog;
