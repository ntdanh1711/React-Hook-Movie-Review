const PopularListReducer = (state, action) => {
  switch (action.type) {
    case 'setPopularList':
      return { ...state, popularList: action.payload.popularList };
    default:
      return state;
  }
};

export default PopularListReducer;
