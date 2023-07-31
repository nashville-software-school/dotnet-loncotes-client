const _apiUrl = "/api/genres";

export const getGenres = () => {
  return fetch(_apiUrl).then((res) => res.json());
};
