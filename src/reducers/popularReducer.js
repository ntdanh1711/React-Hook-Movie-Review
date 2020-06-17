const PopularListReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'setPopularList':
      return { ...state, popularList: action.payload.popularList };
    default:
      return state;
  }
};

export default PopularListReducer;
