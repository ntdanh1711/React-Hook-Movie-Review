/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import SearchReducer from '../reducers/searchReducer';
import SearchContext from '../context/searchContext';

const initialState = {
  movieList: [],
  tvShowList: [],
  collections: [],
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <SearchContext.Provider value={{
      state,
      dispatch,
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
