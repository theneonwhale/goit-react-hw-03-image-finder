import { Component } from 'react';
import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';
import imagesAPI from './services/pixabay-api';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

class App extends Component {
  state = {
    query: '',
    images: [],

    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    // error: null,
    // status: Status.IDLE,
  };

  handleFormSubmit = query => {
    this.setState({ query });
    // this.getImages(query, this.state.page);
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    // if (!this.state.isLoading) {
    //   this.setState(({ isLoading }) => ({
    //     isLoading: !isLoading,
    //   }));
    // }

    // if (prevQuery !== nextQuery || ) {
    //   API.fetchImages(nextQuery, this.state.page)
    //     .then(({ hits }) => {
    //       console.log('imggal', hits);
    //       this.setState({ images: hits, isLoading: false });
    //     })
    //     .catch(error => this.setState({ error }));
    // }

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      // this.toggleLoader();
      this.getImages(nextQuery, nextPage);
    }
    // this.setState({ isLoading: false });
    // if (!this.state.isLoading) {
    //   this.setState(({ isLoading }) => ({
    //     isLoading: !isLoading,
    //   }));
    // }
  }

  getImages = (query, page) => {
    this.toggleLoader();

    return imagesAPI
      .fetchImages(query, page)
      .then(({ hits }) => {
        console.log('imggal', hits);
        this.setState(({ images, isLoading }) => ({
          images: [...images, ...hits],
          // isLoading: true,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.toggleLoader();
        this.scrollTo();
      });

    //   this.setState(({ isLoading }) => ({
    //     isLoading: false,
    //   })),
    // );
  };

  handleChangePage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleLoader = () => {
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }));
  };
  onLoadMore = () => {
    // this.setState(({ page }) => ({ page: this.state.page + 1 }));
    // this.getImages();
    this.handleChangePage();
    this.scrollTo();
    // this.toggleLoader();
  };
  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  onOpenModal = e => {
    this.setState({ largeImageURL: e.target.dataset.source });
    this.toggleModal();
  };
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          query={this.state.query}
          page={this.state.page}
          images={this.state.images}
          onOpenModal={this.onOpenModal}
        />
        {this.state.isLoading && (
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        )}
        {this.state.images.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {this.state.showModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onClose={this.toggleModal}
          />
        )}
      </Container>
    );
  }
}

export default App;
