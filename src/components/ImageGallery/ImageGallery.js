import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    error: null,
    status: Status.IDLE,
  };

  //   componentDidUpdate(prevProps, prevState) {
  //     const prevQuery = prevProps.query;
  //     const nextQuery = this.props.query;

  //     if (prevQuery !== nextQuery) {
  //       this.setState({ status: Status.PENDING });

  //       API.fetchImages(nextQuery, this.props.page)
  //         .then(({ hits }) => {
  //           console.log('imggal', hits);
  //           this.setState({ images: hits, status: Status.RESOLVED });
  //         })
  //         .catch(error => this.setState({ error, status: Status.REJECTED }));
  //     }
  //   }

  render() {
    return (
      <ul>
        {this.props.images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            largeImageURL={largeImageURL}
            onOpenModal={this.props.onOpenModal}
          />
        ))}
      </ul>
    );
  }
}

// export default function ImageGallery({ images }) {
//   return (
//     <ul>
//       {images.map(({ id, webformatURL, largeImageURL }) => (
//         <ImageGalleryItem id={id} src={webformatURL} />
//       ))}
//     </ul>
//   );
// }
