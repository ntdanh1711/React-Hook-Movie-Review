import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { replaceAll } from '../../utils/customString';
import emptyLogo from '../../assets/img/empty.jpg';
import emptyPerson from '../../assets/img/emptyPerson.jpg';
import styles from './styles.scss';

const SearchList = ({ renderList, selectedTag }) => {
  const imagePersonPath = (selectedTag === 'persons') ? 'w90_and_h90_face' : 'w94_and_h141_bestv2';
  const emptyAva = (selectedTag === 'persons') ? emptyPerson : emptyLogo;
  return renderList?.results.map((mv) => (
    <Link key={mv.id} to={`movie/${mv.id}-${replaceAll(mv.title || mv.name, ' ', '-')}`} className={styles.movieCard}>
      <Media>
        <Media left href="#">
          <Media
            object
            data-src={`https://image.tmdb.org/t/p/${imagePersonPath}${mv.poster_path || mv.profile_path}`}
            src={(mv.poster_path || mv.profile_path)
              ? `https://image.tmdb.org/t/p/${imagePersonPath}${mv.poster_path || mv.profile_path}`
              : emptyAva}
            alt={mv.title}
            className={styles.moviePoster}
          />
        </Media>
        <Media body className={styles.movieBody}>
          <Media heading>
            {mv.original_title || mv.name}
          </Media>
          <div className={styles.movieBody__release}>
            {mv.release_date}
          </div>
          <div className={styles.movieBody__des}>
            {mv.known_for_department}
          </div>
          <div className={styles.movieBody__des}>
            {mv.overview}
          </div>
        </Media>
      </Media>
    </Link>
  ));
};

SearchList.propTypes = {
  renderList: PropTypes.arrayOf(PropTypes.shape({
    results: PropTypes.object.isRequired,
  })),
  selectedTag: PropTypes.string.isRequired,
};

export default SearchList;
