import { TheMovieDB, apiKey } from '../constants';
import { success } from './commonServices';

export const getDetailMovieOrTV = (type, id) => fetch(`${TheMovieDB}/${type}/${id}?api_key=${apiKey}`)
  .then(success);

export const getVideo = (type, id) => fetch(`${TheMovieDB}/${type}/${id}/videos?api_key=${apiKey}`)
  .then(success);
