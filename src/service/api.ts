import axios from "../utils/customAPI";
const apiKey = "60b543782a96ada8877d99963921d3c8";
export const Image500 = (path:string) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const Image342 = (path:String) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const Image185 = (path:String) =>
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
