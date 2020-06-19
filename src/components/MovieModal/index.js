/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Modal } from 'reactstrap';

const MovieModal = ({ isOpenWatchModel, urlMovieWatch, onBlurModal = () => {} }) => (
  <div>
    <Modal isOpen={isOpenWatchModel} onBlur={onBlurModal}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${urlMovieWatch}`}
          allowFullScreen
          title="Trailer"
          frameBorder="0"
          // eslint-disable-next-line react/jsx-no-duplicate-props
          allowFullScreen
        />
      </div>
    </Modal>
  </div>
);

export default MovieModal;
