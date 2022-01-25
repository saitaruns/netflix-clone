import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/maintrailer.css";
import API from "./../api";

const Maintrailer = () => {
  const [movie, setMovie] = useState({});
  const fetchTrailer = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        console.log(res.data.results[0]);
        setMovie(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <div className="trailer-banner">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="poster"
      />
      <div className="title-card">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Maintrailer;
