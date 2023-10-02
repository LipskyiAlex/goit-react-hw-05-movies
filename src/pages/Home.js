import { useState, useEffect } from 'react';
import { Trends } from '../services/theMoiveApi';
import {MoviesList} from '../components/MoviesList/MoviesList';


const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);


  useEffect(() => {

  
    Trends()
    .then(movies => setTrendingMovies(movies));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
       <MoviesList movies={trendingMovies}/>
    </div>
  );
};

export default Home;
