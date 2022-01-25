import React from 'react';
import Card from './Card';
import './../styles/card.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


const Row = ({title,url}) => {
  const [movies, setMovies] = useState([]);
  const fetchTrailer = () => {
    axios
      .get(
         url
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchTrailer();
  }, []);
  return <div className='block'>
    <h3>{title}</h3>
    <div className="row">
      {movies.map((movie,i) => {
       return <Card movie={movie} key={i} />
      })}
    </div>
  </div>;
};

export default Row;
