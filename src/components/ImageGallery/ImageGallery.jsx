import React from 'react';
import PropTypes from 'prop-types';
import { StyledGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data = [], handleOpenModal }) => {
  return (
    <StyledGalleryList>
      {data.map(item => {
        return (
          <ImageGalleryItem
            {...item}
            key={item.id}
            handleOpenModal={handleOpenModal}
          />
        );
      })}
    </StyledGalleryList>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array,
  handleOpenModal: PropTypes.func,
};
