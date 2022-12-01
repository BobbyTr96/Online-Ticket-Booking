import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const ModalVideo = ({ isOpen, handleClose, urlMovie }) => {
  return (
    <>
      <Modal
        show={isOpen}
        onHide={handleClose}
        contentClassName='modalVideo'
      >
        <Modal.Body>
          <iframe
          height={400}
            className="videoframe"
            src={urlMovie}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalVideo;
