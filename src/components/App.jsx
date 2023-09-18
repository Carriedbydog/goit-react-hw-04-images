import { StyledApp } from 'App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import React, { Component, useEffect } from 'react';
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
  const {
    loading,
    gallery,
    isOpen,
    page,
    per_page,
    q,
    currentImg,
    error,
    maxImg,
  } = state;

  useEffect(() => {
    if (!q) {
      return;
    }
  }, []);
  useEffect(() => {}, []);

  //  componentDidMount() {
  //     this.setState({ loading: true });
  //     try {
  //       const { page, per_page, q } = this.state;
  //       await getGallery(page, per_page, q);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       this.setState({ loading: false });
  //     }
  //   }
  //    componentDidUpdate(_, prevState) {

  if (prevState.page !== page || prevState.q !== q) {
    this.setState({ loading: true });
    try {
      const { hits, totalHits } = getGallery({ page, per_page, q });
      const maxImg = Math.ceil(totalHits / per_page);
      this.setState(prev => ({
        gallery: [...prev.gallery, ...hits],
        maxImg,
      }));
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ loading: false });
    }
  }
};
const onLoadMore = () => {
  if (page < maxImg) {
    // this.setState(prev => ({ page: prev.page + 1 }));
  }
};
const handleOpenModal = img => {
  // this.setState(prev => ({ isOpen: !prev.isOpen, currentImg: img }));
};
const handleChangeQuery = str => {
  // this.setState({ q: str, gallery: [] });
};
const closeModal = () => {
  // this.setState({ isOpen: false });
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
