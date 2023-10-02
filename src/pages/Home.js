import { useState, useEffect } from 'react';
import { getMovieTrends } from '../services/theMoiveApi';
import {MoviesList} from '../components/MoviesList/MoviesList';


const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {

  
    getMovieTrends()
    .then(movies => setTrendingMovies(movies));
  }, []);

  return (
    <>
         <h1>Trending today</h1>
       <MoviesList movies={trendingMovies}/>
    </>
  );
};

export default Home;
