/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import { Media, Spinner } from 'reactstrap';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import UtilsContext from '../../context/utilsContext';
import search from '../../services/searchServices';
import SearchContext from '../../context/searchContext';
import { replaceAll } from '../../utils/customString';

import styles from './styles.scss';

const SearchPage = () => {
  const { getQueryParam } = useContext(UtilsContext);
  const { state, dispatch } = useContext(SearchContext);
  const query = getQueryParam('query');

  const [movieList, setMovieList] = useState();
  const [pageNumber, setPageNumber] = useState(movieList?.page || 1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
    }
    search(query, pageNumber)
      .then((res) => res.json())
      .then(
        (response) => {
          dispatch({ type: 'setMovieList', payload: { movieList: response } });
          setLoading(false);
        },
      );
  }, [query, pageNumber]);

  useEffect(() => {
    setMovieList(state?.movieList);
  }, [state, state.movieList]);

  const renderSearchMovieList = () => movieList?.results.map((mv) => (
    <Link key={mv.id} to={`movie/${mv.id}-${replaceAll(mv.title, ' ', '-')}`} className={styles.movieCard}>
      <Media>
        <Media left href="#">
          <Media
            object
            data-src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${mv.poster_path}`}
            src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${mv.poster_path}`}
            alt={mv.title}
            className={styles.moviePoster}
          />
        </Media>
        <Media body className={styles.movieBody}>
          <Media heading>
            {mv.original_title}
          </Media>
          <div className={styles.movieDes}>
            {mv.overview}
          </div>
        </Media>
      </Media>
    </Link>
  ));

  return (
    <>
      {(query && movieList?.results?.length > 0)
        ? (
          <>
            <Header />
            <SearchBar isLandingPage={false} />
            {loading
              ? (
                <div className={styles.loading}>
                  <Spinner style={{ width: '3rem', height: '3rem' }} />
                </div>
              )
              : (
                <div className={styles.movieCardContainer}>
                  {renderSearchMovieList()}
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={movieList?.page}
                    itemsCountPerPage={20}
                    totalItemsCount={movieList?.total_results}
                    pageRangeDisplayed={movieList?.total_pages < 5 ? movieList.total_pages : 5}
                    onChange={(pageNum) => { setPageNumber(pageNum); }}
                  />
                </div>
              )}
          </>
        ) : (
          <>
            <Header />
            <SearchBar isLandingPage={false} />
            <div className={styles.noContent}>
              There are no movies that matched your query.
            </div>
          </>
        )}
    </>
  );
};

export default SearchPage;
