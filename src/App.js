import './App.css';
import Navbar from './Components/Navbar';
import Maintrailer from './Components/Maintrailer';
import Row from './Components/Row';
import Footer from './Components/Footer';
import API from './api';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Maintrailer/>
      <Row title={"Popular on Netflix"} url={`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API}`} />
      <Row title={"Trending Now"} url={`https://api.themoviedb.org/3/trending/all/week?api_key=${API}`}/>
      <Row title={"Best Dramas"} url={`https://api.themoviedb.org/3/discover/movie?with_genres=18&vote_count.gte=10&api_key=${API}`}/>
      <Row title={"Best R rated Movies"} url={`https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${API}`}/>
      <Row title={"Best Comedies"} url={`https://api.themoviedb.org/3/discover/movie?with_genres=35&vote_count.gte=10&api_key=${API}`}/>
      <Row title={"Best Horror Movies"} url={`https://api.themoviedb.org/3/discover/movie?with_genres=27&vote_count.gte=10&api_key=${API}`}/>
      <Row title={"Best Documentaries"} url={`https://api.themoviedb.org/3/discover/movie?with_genres=99&vote_count.gte=10&api_key=${API}`}/>
      <Footer />
    </div>
  );
}

export default App;
