import { useState, useEffect } from 'react';
import { getMovieTrends } from '../services/theMoiveApi';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { TitleMain } from '../components/Title/Title';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return function () {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {

   
      const fetchMovies = async () => {
        try {
          const fetchedData = await getMovieTrends(1);

          setTrendingMovies(fetchedData);
        
        } catch (error) {
          console.log(error.message);
        } 
      };
      fetchMovies();

  },[]);

  const handleScroll = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log('fethc');
    }
  };

  return (
    <>
      <TitleMain>Trending today</TitleMain>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
