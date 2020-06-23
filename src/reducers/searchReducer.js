const initialState = {
  movieList: [],
  tvShowList: [],
  collections: [],
  persons: [],
};

const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'setMovieList':
      return { ...state, movieList: action.payload.movieList };
    case 'setTvShowList':
      return { ...state, tvShowList: action.payload.tvShowList };
    case 'setCollection':
      return { ...state, collections: action.payload.collections };
    case 'setPersons':
      return { ...state, persons: action.payload.persons };
    case 'resetSearchList':
      return initialState;
    default:
      return state;
  }
};

export { SearchReducer, initialState };
