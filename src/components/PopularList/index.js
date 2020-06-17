/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PopularContext from '../../context/popularContext';
import { getPopularMovieList } from '../../services/popularServices';
import PopularItem from './item';
import styles from './styles.scss';

const Popular = () => {
  const { state, dispatch } = React.useContext(PopularContext);
  const [popularList, setPopularList] = useState([]);
  useEffect(() => {
    getPopularMovieList()
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'setPopularList', payload: { popularList: data } }));
  }, [dispatch]);

  useEffect(() => {
    setPopularList(state?.popularList?.results);
  }, [state, state.popularList]);
  return (
    <div className={styles.popularContainer}>
      <h2>What's Populars</h2>
      <div className={styles.popularList}>
        {
          popularList && popularList.length > 0
          && popularList.map((item, index) => <PopularItem key={index} PopularItems={item} />)
        }
      </div>
    </div>
  );
};

export default Popular;
