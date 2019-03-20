import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const ShooterContext = createContext(null);
const ImageContext = createContext(null);

import { get } from '../api';

const PhotoShooter = ({ children, initialProgress }) => {
  const [image, setImage] = useState(null);

  const resetPhoto = () => setImage(null);

  const shootPhoto = async () => {
    setState({
      ...state,
      progress: 'initial'
    });
    setImage(await get());
    setState({
      ...state,
      progress: 'finished'
    });
  };

  const [state, setState] = useState({
    progress: initialProgress,
    shootPhoto,
    resetPhoto
  });

  const isModalOpen =
    state.progress !== 'idle' && state.progress !== 'finished';

  return (
    <ShooterContext.Provider value={state}>
      <ImageContext.Provider value={image}>
        <Modal open={isModalOpen}>
          <div>HELLO</div>
        </Modal>
        <Button color="primray" variant="contained" onClick={shootPhoto}>
          SHOOT
        </Button>
        <div>IMAGE: </div>
        <img src={image} />
      </ImageContext.Provider>
    </ShooterContext.Provider>
  );
};

PhotoShooter.defaultProps = {
  initialProgress: 'idle'
};

PhotoShooter.propTypes = {
  children: PropTypes.node.isRequired,
  initialProgress: PropTypes.oneOf(['idle', 'initial', 'finished'])
};

export default PhotoShooter;

export { ShooterContext, ImageContext };
