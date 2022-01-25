import './../styles/card.css';
import {useState} from 'react';

const Card = ({movie}) => {
    const [style, setStyle] = useState({
        transform : 'scale(1.0)',
        zIndex : '1'
    })
    const over = () => {
        setStyle({
            transform : 'scale(1.5)',
            zIndex : '10'
        })
    };
    const out = () => {
        setStyle({
            transform : 'scale(1.0)',
            zIndex : '1'
        })
    };
  return <div style={style} className="card" onMouseOver={over} onMouseLeave={out}>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=""/>
  </div>;
};

export default Card;
