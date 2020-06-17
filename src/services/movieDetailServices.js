import { TheMovieDB, apiKey } from '../constants';

export const getDetailTV = (movieId) => fetch(`${TheMovieDB}/movie/${movieId}?api_key=${apiKey}`);
export default getDetailTV;
