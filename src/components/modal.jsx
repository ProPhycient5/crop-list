const Modal = ({ setModalOpen, selectedCrop }) => {
  return (
    <div className="modal_wrapper">
      <div className="modal_card">
        <button className="close_button" onClick={() => setModalOpen(false)}>
          X
        </button>
        <img
          src={selectedCrop?.thumbnails[0]?.image}
          alt="Selected Crop"
          className="modal_image"
        />
        <div className="card_content">
          <p>{selectedCrop?.crop_name}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
