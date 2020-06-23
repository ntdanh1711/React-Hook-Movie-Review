import React, { useState, useCallback } from 'react';
import MovieDetail from '../../components/MovieDetail';
import MovieModal from '../../components/MovieModal';

const MovieDetailPage = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState('');
  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  return (
    <div>
      <MovieDetail onClickOpenModal={setOpenModal} setVideoUrl={setUrl} />
      <MovieModal
        isOpenWatchModel={isOpenModal}
        urlMovieWatch={url}
        toggleClose={closeModal}
      />
    </div>
  );
};

export default MovieDetailPage;
