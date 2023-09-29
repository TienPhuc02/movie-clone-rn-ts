import axios from "../utils/customAPI";
const apiKey = "60b543782a96ada8877d99963921d3c8";
export const Image500 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const Image342 = (path: String) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const Image185 = (path: String) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null;
export const callListMovieTrendingHome = () => {
  return axios.get(`/trending/movie/day?api_key=${apiKey}`);
};
export const callListMovieUpcoming = () => {
  return axios.get(`/movie/upcoming?api_key=${apiKey}`);
};
export const callListMovieTopRated = () => {
  return axios.get(`/movie/top_rated?api_key=${apiKey}`);
};
export const callMovieDetail = (id: string) => {
  return axios.get(`/movie/${id}?api_key=${apiKey}`);
};
export const callMovieCredit = (id: string) => {
  return axios.get(`/movie/${id}/credits?api_key=${apiKey}`);
};
export const callMovieSimilar = (id: string) => {
  return axios.get(`/movie/${id}/similar?api_key=${apiKey}`);
};
export const callPersonDetail = (id: string) => {
  return axios.get(`/person/${id}?api_key=${apiKey}`);
};
export const callSearchMovie = () => {
  return axios.get(`/search/movie?api_key=${apiKey}`);
};
