import { useState, useEffect } from 'react';
import { getMovieTrends } from '../services/theMoiveApi';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { TitleMain } from '../components/Title/Title';
import throttle from 'lodash.throttle';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(e => {
      if (fetching) return;

      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    }, 1000);

    document.addEventListener('scroll', handleScroll);

    return function () {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [fetching]);

  useEffect(() => {
    const fetchedMovies = async page => {
      try {
        setFetching(true);
        const fetchedData = await getMovieTrends(page);
        setTrendingMovies(prevData => [...prevData, ...fetchedData]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setFetching(false);
      }
    };
    fetchedMovies(currentPage);
  }, [currentPage]);

  return (
    <>
      <TitleMain>Trending today</TitleMain>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;

// const fetchMovies = useCallback(async () => {

//   try {

//   const fetchedData = await getMovieTrends(currentPage);

//     setTrendingMovies((prevState) => [...prevState,...fetchedData]);

//      setCurrentPage(prev => prev+1)
//   } catch (error) {
//     console.log(error.message);
//   } finally {

//     setloading(false);
//   }
// },[currentPage]);

// useEffect(() => {

//     if(loading) {

//       fetchMovies();
//     }

// },[loading,fetchMovies]);
