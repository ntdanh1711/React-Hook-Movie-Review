import React, { useState, useContext } from 'react';
import { Input } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import UtilsContext from '../../context/utilsContext';
import styles from './styles.scss';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ isLandingPage, onClickSearch = () => {} }) => {
  const { getQueryParam } = useContext(UtilsContext);
  const query = getQueryParam('query');
  const [searchWord, setSearchWord] = useState(query);
  const queryCommand = searchWord ? `?query=${searchWord}` : '';
  const history = useHistory();

  const handleKeyPress = (target) => {
    if (target.charCode === 13) {
      onClickSearch();
      history.push(`search${queryCommand}`);
    }
  };

  return (
    <div className={styles.searchHeader}>
      <div className={styles.searchHeader__intro}>
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      </div>
      <div className={isLandingPage ? styles.searchContainerMain : styles.searchContainer}>
        <Input
          placeholder="Search for a movie, tv show, person......"
          className={styles.searchInput}
          bsSize="lg"
          onChange={(e) => { setSearchWord(e.target.value); }}
          onKeyPress={handleKeyPress}
          value={searchWord}
        />
        <Link to={`search${queryCommand}`} className={styles.searchButton} onClick={onClickSearch}>Search</Link>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  isLandingPage: PropTypes.bool.isRequired,
  onClickSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  onClickSearch: () => {},
};

export default SearchBar;
