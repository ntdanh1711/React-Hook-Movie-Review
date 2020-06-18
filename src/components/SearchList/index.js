/* eslint-disable react/prop-types */
import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

import { replaceAll } from '../../utils/customString';
import emptyLogo from '../../assets/img/empty.jpg';
import styles from './styles.scss';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line arrow-body-style
const SearchList = ({ renderList }) => {
  return renderList?.results.map((mv) => (
    <Link key={mv.id} to={`movie/${mv.id}-${replaceAll(mv.title || mv.name, ' ', '-')}`} className={styles.movieCard}>
      <Media>
        <Media left href="#">
          <Media
            object
            data-src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${mv.poster_path}`}
            src={mv.poster_path !== null
              ? `https://image.tmdb.org/t/p/w94_and_h141_bestv2${mv.poster_path}`
              : emptyLogo}
            alt={mv.title}
            className={styles.moviePoster}
          />
        </Media>
        <Media body className={styles.movieBody}>
          <Media heading>
            {mv.original_title || mv.original_name}
          </Media>
          <div className={styles.movieBody__release}>
            {mv.release_date}
          </div>
          <div className={styles.movieBody__des}>
            {mv.overview}
          </div>
        </Media>
      </Media>
    </Link>
  ));
};

export default SearchList;
