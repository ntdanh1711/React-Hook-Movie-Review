/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import PopularReducer from '../reducers/popularReducer';
import PopularContext from '../context/popularContext';

const initialState = {
  popularList: [],
};

const PopularProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PopularReducer, initialState);

  return (
    <PopularContext.Provider value={{
      state,
      dispatch,
    }}
    >
      {children}
    </PopularContext.Provider>
  );
};

export default PopularProvider;
