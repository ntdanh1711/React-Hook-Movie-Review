import { TheMovieDB, apiKey } from '../constants';

const success = (res) => (res.ok ? res.json() : Promise.resolve({}));
export const getDetailMovie = (movieId) => fetch(`${TheMovieDB}/movie/${movieId}?api_key=${apiKey}`)
  .then(success);
export const getDetailTV = (tvId) => fetch(`${TheMovieDB}/tv/${tvId}?api_key=${apiKey}`)
  .then(success);
// For tv
export const getTVVideo = (tvId) => fetch(`${TheMovieDB}/tv/${tvId}/videos?api_key=${apiKey}`)
  .then(success);

// For movie
export const getMovieVideo = (movieId) => fetch(`${TheMovieDB}/movie/${movieId}/videos?api_key=${apiKey}`)
  .then(success);
export default getDetailMovie;
