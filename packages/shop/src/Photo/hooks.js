import { useContext } from 'react';
import { ShooterContext, ImageContext } from './components/PhotoShooter';

const useShootPhoto = () => {
  const { shootPhoto } = useContext(Context);
  return shootPhoto;
};

const useImage = () => {
  const { image } = useContext(ImageContext);
  return image;
};

export { useShootPhoto, useImage };
