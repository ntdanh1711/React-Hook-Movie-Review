/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getDetailTV } from '../../services/movieDetailServices';
// import { BackdropImage, PosterAvatar } from '../../constants';
import MovieDetail from '../../components/MovieDetail';
import MovieModal from '../../components/MovieModal';

// import styles from './styles.scss';

const MovieDetailPage = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState('');

  return (
    <div>
      <MovieDetail onClickOpenModal={setOpenModal} setVideoUrl={setUrl} />
      <MovieModal
        isOpenWatchModel={isOpenModal}
        urlMovieWatch={url}
        toggleClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default MovieDetailPage;
