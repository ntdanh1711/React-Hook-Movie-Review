const initialState = {
  popularList: [],
};

const PopularListReducer = (state, action) => {
  switch (action.type) {
    case 'setPopularList':
      return { ...state, popularList: action.payload.popularList };
    case 'resetPopularList':
      return initialState;
    default:
      return state;
  }
};

export { PopularListReducer, initialState };
