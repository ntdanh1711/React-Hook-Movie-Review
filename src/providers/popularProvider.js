/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import { PopularListReducer, initialState } from '../reducers/popularReducer';
import PopularContext from '../context/popularContext';

const PopularProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PopularListReducer, initialState);

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
