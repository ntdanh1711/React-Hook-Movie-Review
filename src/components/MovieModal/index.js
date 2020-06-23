/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';

const MovieModal = ({ isOpenWatchModel, urlMovieWatch, toggleClose }) => (
  <div>
    <Modal isOpen={isOpenWatchModel} size="lg">
      <ModalHeader toggle={toggleClose}>Trailer</ModalHeader>
      <ModalBody>
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
      </ModalBody>
    </Modal>
  </div>
);

MovieModal.propTypes = {
  isOpenWatchModel: PropTypes.bool.isRequired,
  urlMovieWatch: PropTypes.string.isRequired,
  toggleClose: PropTypes.func,
};

MovieModal.defaultProps = {
  toggleClose: () => {},
};

export default MovieModal;
