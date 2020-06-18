/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import { Spinner } from 'reactstrap';
import Pagination from 'react-js-pagination';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import SearchCategories from '../../components/SearchCategories';
import SearchList from '../../components/SearchList';
import UtilsContext from '../../context/utilsContext';
import searchAll from '../../services/searchServices';
import SearchContext from '../../context/searchContext';

import styles from './styles.scss';

const SearchPage = () => {
  const { getQueryParam } = useContext(UtilsContext);
  const { state, dispatch } = useContext(SearchContext);
  const query = getQueryParam('query');

  const [renderList, setRenderList] = useState();
  const [filterTag, setFilterTag] = useState('movie');
  const [pageNumber, setPageNumber] = useState(renderList?.page || 1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
    }
    searchAll({ query, pageNumber }, dispatch, setLoading);
  }, [query, pageNumber]);

  useEffect(() => {
    switch (filterTag) {
      case 'movie':
        setRenderList(state?.movieList);
        break;
      case 'tv':
        setRenderList(state?.tvShowList);
        break;
      case 'collection':
        setRenderList(state?.collections);
        break;
      default:
        break;
    }
  }, [state, state.movieList, state.tvShowList, state.collections, filterTag]);

  const onClickSearch = () => {
    setFilterTag('movie');
    setPageNumber(1);
  };

  const onSelectCategory = (tag) => {
    setFilterTag(tag);
    setPageNumber(1);
  };

  return (
    <>
      {(query && renderList?.results?.length > 0)
        ? (
          <>
            <Header />
            <SearchBar
              isLandingPage={false}
              onClickSearch={onClickSearch}
            />
            {loading
              ? (
                <div className={styles.loading}>
                  <Spinner className={styles.loading__spinner} />
                </div>
              )
              : (
                <div className={styles.searchContainer}>
                  <div className={styles.searchContainer__inner}>
                    <SearchCategories
                      onSelectCategory={onSelectCategory}
                      selectedCategory={filterTag}
                      movieCount={state?.movieList?.total_results}
                      tvCount={state?.tvShowList?.total_results}
                      collectionCount={state?.collections?.total_results}
                    />
                    <div className={styles.movieCardContainer}>
                      <SearchList renderList={renderList} />
                      <Pagination
                        itemClass="page-item"
                        linkClass="page-link"
                        activePage={renderList?.page}
                        itemsCountPerPage={20}
                        totalItemsCount={renderList?.total_results}
                        pageRangeDisplayed={renderList?.total_pages < 5
                          ? renderList.total_pages
                          : 5}
                        onChange={(pageNum) => { setPageNumber(pageNum); }}
                      />
                    </div>
                  </div>
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
