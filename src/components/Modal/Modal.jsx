import React, { useEffect } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ close, currentImg }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);
  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  return (
    <StyledOverlay onClick={onBackDropClick}>
      <StyledModal>
        <img src={currentImg} alt="Large Img" />
      </StyledModal>
    </StyledOverlay>
  );
};
Modal.propTypes = {
  currentImg: PropTypes.string,
  close: PropTypes.func,
};
