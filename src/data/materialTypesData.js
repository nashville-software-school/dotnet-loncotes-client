const _apiUrl = "/api/materialtypes";

export const getMaterialTypes = () => {
  return fetch(_apiUrl).then((res) => res.json());
};
