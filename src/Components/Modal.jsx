import reactDom from "react-dom";
import "./../styles/modal.css";
import { ModalContext } from "../App";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, data }) => {
  const toggleModal = useContext(ModalContext);
  const handleClick = (e) => {
    if (e.target.className === "back-drop") {
      toggleModal();
    }
  };
  return isOpen
    ? reactDom.createPortal(
        <div className="back-drop" onClick={handleClick}>
          <div className="modal">
            <div className="modal-header">
              <FaTimes className="close-icon" onClick={() => toggleModal()} />
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="modal-body">
              <p>{data.release_date}</p>
              <p>{data.overview}</p>
            </div>
            <div className="modal-footer">
              <h3>About {data.title}</h3>
              <h5>Cast: </h5>
              <h5>Genres: </h5>
              <h5>This show is: </h5>
            </div>
          </div>
        </div>,
        document.getElementById("portal")
      )
    : null;
};

export default Modal;
