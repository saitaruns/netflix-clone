import React from "react";
import Card from "./Card";
import "./../styles/row.css";
import axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = movies.length / 4;

  useEffect(() => {
    const fetchTrailer = () => {
      axios
        .get(url)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchTrailer();
  }, [url]);

  const [rowStyle, setRowStyle] = useState({
    left: 0,
  });

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setRowStyle({
        left: -(currentPage - 2) * 92 + "vw",
      });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setRowStyle({
        left: -currentPage * 92 + "vw",
      });
    }
  };

  return (
    <div className="block">
      <h3>{title}</h3>
      <div className="row-main">
        {currentPage !== 1 && (
          <div className="navigation-buttons left" onClick={previousPage}>
            <FaAngleLeft />
          </div>
        )}
        <div className="row" style={rowStyle}>
          {movies.map((movie, i) => {
            return <Card movie={movie} key={i} />;
          })}
        </div>
        {currentPage !== totalPages && (
          <div className="navigation-buttons right" onClick={nextPage}>
            <FaAngleRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default Row;
