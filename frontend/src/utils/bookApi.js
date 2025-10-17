export const fetchBookByCategory = async (category) => {
  const response = await fetch(`/api/books?category=${encodeURIComponent(category)}`);
  if (!response.ok) {
    throw new Error('Unable to fetch book recommendation.');
  }
  return response.json();
};

export const fetchAllBooks = async () => {
  const response = await fetch('/api/books');
  if (!response.ok) {
    throw new Error('Unable to fetch book recommendations.');
  }
  return response.json();
};
