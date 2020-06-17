import { TheMovieDB, apiKey } from '../constants';

export const getPopularMovieList = () => fetch(`${TheMovieDB}/movie/popular?api_key=${apiKey}`);

export default getPopularMovieList;
