import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => new URLSearchParams(useLocation().search);
export const getQueryParam = (queryName) => useQuery().get(queryName);

const UtilsContext = React.createContext();
export default UtilsContext;
