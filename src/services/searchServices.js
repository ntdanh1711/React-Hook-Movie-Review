import { apiKey, searchUrl } from '../constants';

const success = (res) => (res.ok ? res.json() : Promise.resolve({}));

export const searchMovie = (query, pageNumber) => fetch(`${searchUrl}/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`)
  .then(success);

export const searchTv = (query, pageNumber) => fetch(`${searchUrl}/tv?api_key=${apiKey}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`)
  .then(success);

export const searchCollection = (query, pageNumber) => fetch(`${searchUrl}/collection?api_key=${apiKey}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`)
  .then(success);

export const searchPerson = (query, pageNumber) => fetch(`${searchUrl}/person?api_key=${apiKey}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`)
  .then(success);

const fetchAllCategory = ({ query, pageNumber }, dispatch, setLoading) => Promise.all([
  searchMovie(query, pageNumber),
  searchTv(query, pageNumber),
  searchCollection(query, pageNumber),
  searchPerson(query, pageNumber),
])
  .then(([movieList, tvShowList, collections, persons]) => {
    dispatch({ type: 'setMovieList', payload: { movieList } });
    dispatch({ type: 'setTvShowList', payload: { tvShowList } });
    dispatch({ type: 'setCollection', payload: { collections } });
    dispatch({ type: 'setPersons', payload: { persons } });
    setLoading(false);
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));

export default fetchAllCategory;
