export default function Button({ onLoadMore }) {
  return (
    <button type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
}
