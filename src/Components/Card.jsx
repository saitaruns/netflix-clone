import "./../styles/row.css";
import { useContext } from "react";
import { ModalContext } from "./../App";

const Card = ({ movie }) => {
  const {openModal} = useContext(ModalContext);
  const handleClick = (e) => {
    openModal(movie);
  };
  return (
    <div className="card" onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt=""
      />
    </div>
  );
};

export default Card;
