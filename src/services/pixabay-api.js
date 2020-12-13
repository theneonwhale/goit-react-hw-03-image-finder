// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
const API_KEY = '18468929-778868d20e0ea2a779d7d4913';
const BASE_URL = 'https://pixabay.com/api';

async function fetchImages(query, page) {
  const response = await fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return await response.json();
}

const api = {
  fetchImages,
};

export default api;
