export default function ImageGalleryItem({ src, largeImageURL, onOpenModal }) {
  return (
    <li>
      <img
        src={src}
        data-source={largeImageURL}
        alt=""
        width="200"
        onClick={onOpenModal}
      />
    </li>
  );
}
