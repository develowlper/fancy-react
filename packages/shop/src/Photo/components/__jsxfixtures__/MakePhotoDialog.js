import React, { useState } from 'react';
import { MakePhotoDialog } from '..';
import Button from '@material-ui/core/Button';

const Fixture = ({}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Button color="primary" variant="contained" onClick={toggleOpen}>
        Toggle
      </Button>
      <MakePhotoDialog open={open} onClose={toggleOpen} />
    </React.Fragment>
  );
};

export default <Fixture />;
