import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailTV } from '../../services/movieDetailServices';
import { BackdropImage, PosterAvatar } from '../../constants';

import styles from './styles.scss';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getDetailTV(id)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);
  const getYear = (date) => {
    const newDate = new Date(date);
    return newDate.getFullYear();
  };

  return (
    <div className={styles.movieDetailContainer} style={{ backgroundImage: movie && movie.backdrop_path && `url(${BackdropImage}${movie.backdrop_path})` }}>
      {
        movie && movie.backdrop_path && (
          <div className={styles.movieDetail}>
            <div className={styles.movieAvatar}>
              <img src={`${PosterAvatar}${movie.poster_path}`} alt="avatar" />
            </div>
            <div className={styles.movieDescription}>
              <div className={styles.movieDescription__title}>
                <span className={styles.movieDescription__title__main}>{movie.title}</span>
                <span className={styles.movieDescription__title__releaseDate}>
                  (
                  {getYear(movie.release_date)}
                  )
                </span>
              </div>
              <div className={styles.movieDescription__control}>
                <div className={styles.movieDescription__control__rate}>
                  {movie.vote_average}
                  %
                </div>
                <div className={styles.movieDescription__control__rate__explain}>User Score</div>
              </div>
              <div className={styles.movieDescription__tagLine}>{movie.tagline}</div>
              <div className={styles.movieDescription__overview}>
                <div className={styles.movieDescription__overview__title}>Overview</div>
                <div className={styles.movieDescription__overview__content}>{movie.overview}</div>
              </div>
            </div>

          </div>
        )
      }
    </div>
  );
};

export default MovieDetail;
