import { apiKey, searchUrl } from '../constants';
import { success } from './commonServices';

export const searchKeyWord = (query, pageNumber, type) => fetch(`${searchUrl}/${type}?api_key=${apiKey}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`)
  .then(success);

const listFetchAction = (query, pageNumber) => {
  const typeArray = ['movie', 'tv', 'collection', 'person'];
  let actionArray = [];
  // eslint-disable-next-line no-return-assign
  typeArray.map((type) => (
    actionArray = [...actionArray, searchKeyWord(query, pageNumber, type)]
  ));
  return actionArray;
};

const fetchAllCategory = ({ query, pageNumber }, dispatch, setLoading) => Promise.all(
  listFetchAction(query, pageNumber),
)
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
