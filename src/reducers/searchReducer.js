const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'setMovieList':
      return { ...state, movieList: action.payload.movieList };
    case 'setTvShowList':
      return { ...state, tvShowList: action.payload.tvShowList };
    case 'setCollection':
      return { ...state, collections: action.payload.collections };
    default:
      return state;
  }
};

export default SearchReducer;
