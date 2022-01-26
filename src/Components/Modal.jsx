import reactDom from "react-dom";
import "./../styles/modal.css";
import { ModalContext } from "../App";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, data }) => {
  const {closeModal} = useContext(ModalContext);

  const close = (e) => {
    document.querySelector(".modal").style.animation = "zoomOut .3s forwards";
      setTimeout(() => {
        closeModal();
      }, 280);
  };

  const handleClick = (e) => {
    if (e.target.className === "back-drop") {
      close()
    }
  };  

  return isOpen ? reactDom.createPortal(
        <div className="back-drop" onClick={handleClick}>
          <div className="modal">
            <div className="modal-header">
              <FaTimes className="close-icon" onClick={() => close()} />
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
      ): null;
};

export default Modal;
