import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const MyModal = props => (
  <>
    <div>
      <Modal
        isOpen={props.on}
        onRequestClose={props.on}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="mb-3">Error Occur</h2>
        <p>{props.error}</p>
        <button className="btn btn-danger mb-3" onClick={props.on}>
          close
        </button>
      </Modal>
    </div>
  </>
);

export default MyModal;
