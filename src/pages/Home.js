import { useState, useEffect } from 'react';
import { getMovieTrends } from '../services/theMoiveApi';
import {MoviesList} from '../components/MoviesList/MoviesList';
import {TitleMain} from '../components/Title/Title';

const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {

    getMovieTrends()
    .then(movies => setTrendingMovies(movies));
  }, []);

 

  return (
    <>
         <TitleMain>Trending today</TitleMain>
       <MoviesList movies={trendingMovies}/>
    </>
  );
};

export default Home;
