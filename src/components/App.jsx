import { StyledApp } from 'App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Button } from './Button/Button';
import React, { useEffect, useState } from 'react';
import { getGallery } from 'helpers/PixabayAPI';
import Searchbar from './Searchbar/Searchbar';

import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [q, setQ] = useState('');
  const [currentImg, setCurrentImg] = useState(null);
  const [error, setError] = useState(null);
  const [maxImg, SetMaxImg] = useState(0);

  useEffect(() => {
    if (!q) {
      return;
    }

    const fetchGallery = async () => {
      setLoading(true);
      try {
        const data = await getGallery({ q, per_page, page });
        const maxImg = Math.ceil(data.totalHits / per_page);
        setGallery(prev => [...prev, ...data.hits]);

        SetMaxImg(maxImg);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, [q, page, per_page]);

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };
  const handleOpenModal = img => {
    setIsOpen(prev => !prev);
    setCurrentImg(img);
  };
  const handleChangeQuery = str => {
    setQ(str);
    setGallery([]);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledApp>
        <Searchbar onChangeQuery={handleChangeQuery} />

        {loading && !gallery.length ? (
          <Loader />
        ) : (
          <ImageGallery data={gallery} handleOpenModal={handleOpenModal} />
        )}
        {error && <h2>Something went wrong</h2>}
        {!gallery.length && q && !loading && (
          <h2>I didn't find anything, try again</h2>
        )}
        {isOpen && <Modal close={closeModal} currentImg={currentImg} />}
      </StyledApp>
      {gallery.length > 0 && page < maxImg && (
        <Button title="Load More" onLoadMore={onLoadMore} />
      )}
    </>
  );
};
