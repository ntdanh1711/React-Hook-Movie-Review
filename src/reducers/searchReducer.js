const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'setMovieList':
      return { ...state, movieList: action.payload.movieList };
    default:
      return state;
  }
};

export default SearchReducer;
