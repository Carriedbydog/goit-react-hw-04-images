import { StyledApp } from 'App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import React, { Component, useEffect, useState } from 'react';
import { getGallery } from 'helpers/PixabayAPI';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

// export default class App extends Component {
//   state = {
//     loading: false,
//     gallery: [],
//     isOpen: false,
//     page: 1,
//     per_page: 12,
//     q: '',
//     currentImg: null,
//     error: null,
//     maxImg: 0,
//   };

// async componentDidMount() {
//   this.setState({ loading: true });
//   try {
//     const { page, per_page, q } = this.state;
//     await getGallery(page, per_page, q);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     this.setState({ loading: false });
//   }
// }
// async componentDidUpdate(_, prevState) {
//   const { page, per_page, q } = this.state;

//   if (prevState.page !== page || prevState.q !== q) {
//     this.setState({ loading: true });
//     try {
//       const { hits, totalHits } = await getGallery({ page, per_page, q });
//       const maxImg = Math.ceil(totalHits / per_page);
//       this.setState(prev => ({
//         gallery: [...prev.gallery, ...hits],
//         maxImg,
//       }));
//     } catch (error) {
//       this.setState({ error: error });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }
// }
// onLoadMore = () => {
//   const { page, maxImg } = this.state;
//   if (page < maxImg) {
//     this.setState(prev => ({ page: prev.page + 1 }));
//   }
// };
// handleOpenModal = img => {
//   this.setState(prev => ({ isOpen: !prev.isOpen, currentImg: img }));
// };
// handleChangeQuery = str => {
//   this.setState({ q: str, gallery: [] });
// };
// closeModal = () => {
//   this.setState({ isOpen: false });
// };
//   render() {
//     const { loading, isOpen, gallery, currentImg, error, q, maxImg, page } =
//       this.state;
//     return (
//       <>
//         <StyledApp>
//           <Searchbar onChangeQuery={this.handleChangeQuery} />

//           {loading && !gallery.length ? (
//             <Loader />
//           ) : (
//             <ImageGallery
//               data={gallery}
//               handleOpenModal={this.handleOpenModal}
//             />
//           )}
//           {error && <h2>Something went wrong</h2>}
//           {!gallery.length && q && !loading && (
//             <h2>I didn't find anything, try again</h2>
//           )}
//           {isOpen && <Modal close={this.closeModal} currentImg={currentImg} />}
//         </StyledApp>
//         {gallery.length > 0 && page < maxImg && (
//           <Button title="Load More" onLoadMore={this.onLoadMore} />
//         )}
//       </>
//     );
//   }
// }
export const App = () => {
  // const {
  //   loading,
  //   gallery,
  //   isOpen,
  //   page,
  //   per_page,
  //   q,
  //   currentImg,
  //   error,
  //   maxImg,
  // } = state;
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(12);
  const [q, setQ] = useState('');
  const [currentImg, setCurrentImg] = useState(null);
  const [error, setError] = useState(null);
  const [maxImg, SetMaxImg] = useState(0);

  useEffect(() => {
    if (!q) {
      return;
    }
    setLoading(true);
  }, []);

  const fetchGallery = async () => {
    try {
      const { hits, totalHits } = await getGallery({ q, per_page, page });
      const maxImg = Math.ceil(data.totalHits / per_page);
      setGallery(...prev, ...data.hits);
      SetMaxImg(maxImg);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const onLoadMore = () => {
    if (page < maxImg) {
      // this.setState(prev => ({ page: prev.page + 1 }));
      setPage(prev => prev + 1);
    }
  };
  const handleOpenModal = img => {
    // this.setState(prev => ({ isOpen: !prev.isOpen, currentImg: img }));
    setIsOpen(prev => !prev);
    setCurrentImg(img);
  };
  const handleChangeQuery = str => {
    // this.setState({ q: str, gallery: [] });
    setQ(str);
    setGallery([]);
  };
  const closeModal = () => {
    // this.setState({ isOpen: false });
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
