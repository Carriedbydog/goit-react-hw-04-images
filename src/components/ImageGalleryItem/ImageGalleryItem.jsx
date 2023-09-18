import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledGalleryItem,
  StyledGalleryItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  user,
  handleOpenModal,
}) => {
  return (
    <StyledGalleryItem>
      <StyledGalleryItemImg
        onClick={() => {
          handleOpenModal(largeImageURL);
        }}
        src={webformatURL}
        alt={user}
      />
    </StyledGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  user: PropTypes.string,
  handleOpenModal: PropTypes.func,
};
