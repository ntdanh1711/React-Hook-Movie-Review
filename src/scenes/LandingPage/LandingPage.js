import React from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import PopularList from '../../components/PopularList';

const LandingPage = () => (
  <>
    <Header />
    <SearchBar isLandingPage />
    <PopularList />
  </>
);

export default LandingPage;
