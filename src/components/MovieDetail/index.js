/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDetailMovieOrTV, getVideo } from '../../services/movieDetailServices';
import { BackdropImage, PosterAvatar } from '../../constants';

import styles from './styles.scss';

const MovieDetail = ({ onClickOpenModal, setVideoUrl }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [urlTrailerVideo, setUrlTrailerVideo] = useState('');
  const hrefPaths = window.location.pathname.split('/');
  const isMovie = hrefPaths[1] === 'movie';

  useEffect(() => {
    const pureIds = id && id.split('-');
    const type = (pureIds?.length > 0 && isMovie)
      ? 'movie' : 'tv';

    getDetailMovieOrTV(type, pureIds[0])
      .then((data) => setMovie(data));
    getVideo(type, pureIds[0])
      .then(
        (data) => data?.results
          && data?.results.length > 0
          && setUrlTrailerVideo(data.results[0].key),
      );
  }, [id]);

  const getYear = (date) => {
    const newDate = new Date(date);
    return newDate.getFullYear();
  };

  const openMovie = () => {
    onClickOpenModal(true);
    setVideoUrl(urlTrailerVideo);
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
                <div className={styles.movieDescription__control__rate__explain}>
                  User Score
                </div>
              </div>
              <div className={styles.movieDescription__playTrailer} onClick={openMovie}>
                <i className="fa fa-play" aria-hidden="true" />
                <span>Play Trailer</span>
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

MovieDetail.propTypes = {
  onClickOpenModal: PropTypes.func,
  setVideoUrl: PropTypes.func,
};

MovieDetail.defaultProps = {
  onClickOpenModal: () => {},
  setVideoUrl: () => {},
};

export default MovieDetail;
