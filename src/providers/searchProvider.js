/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import { SearchReducer, initialState } from '../reducers/searchReducer';
import SearchContext from '../context/searchContext';

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
