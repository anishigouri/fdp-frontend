import Cropper from 'react-easy-crop';
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  Slider,
  Slide,
  DialogActions,
  DialogContent,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { ImageStyled, ControlsStyled, ContainerStyled } from './styled';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  image?: string;
  open: boolean;
  onClose(): void;
}

const InputImageCrop: React.FC<IProps> = ({ image, open, onClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  const handleChange = (event: object, newValue: number | number[]): void => {
    if (typeof newValue === 'number') {
      setZoom(newValue);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    // console.log(croppedArea, croppedAreaPixels);
  }, []);

  const handleClose = (): void => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <ContainerStyled>
          <ImageStyled>
            <Cropper
              image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </ImageStyled>
          <ControlsStyled>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={handleChange}
            />
          </ControlsStyled>
        </ContainerStyled>
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};

InputImageCrop.propTypes = {
  image: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

InputImageCrop.defaultProps = {
  image: '/assets/img/no-image.png',
};

Transition.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element]),
};

Transition.defaultProps = {
  children: React.createElement('div'),
};

export default InputImageCrop;
