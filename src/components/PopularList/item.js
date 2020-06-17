/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { replaceAll } from '../../utils/customString';

import styles from './styles.scss';

const ORG_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face';
const PopularItem = ({ PopularItems }) => {
  const {
    id, poster_path, title, release_date, vote_average,
  } = PopularItems;

  return (
    <div className={styles.popularItem}>
      <Link to={`movie/${id}-${replaceAll(title, ' ', '-')}`}>

        <div className={styles.popularItem__image}>
          <img src={ORG_URL + poster_path} alt="poster" />
        </div>
        <div className={styles.popularItem__rate}>{vote_average}</div>
        <div className={styles.popularItem__content}>
          <div className={styles.popularItem__content__title}>{title}</div>
          <div className={styles.popularItem__content__release}>{release_date}</div>
        </div>
      </Link>
    </div>

  );
};

export default PopularItem;
