import './../styles/row.css';
import { useContext } from 'react';
import { ModalContext } from './../App';

const Card = ({movie}) => {
    const toggleModal = useContext(ModalContext);
  return <div  className="card" onClick={()=>toggleModal(movie)} >
    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=""/>
  </div>;
};

export default Card;
