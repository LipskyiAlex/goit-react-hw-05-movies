import React from 'react';
import { useState, useEffect } from 'react';
import { getMovieTrends } from '../services/theMoiveApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { TitleMain } from '../components/Title/Title';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(e => {

      if (fetching) {
        return;
      } 
  
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        200
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
        setLoading(true);
        setFetching(true);
        const fetchedData = await getMovieTrends(page);
        setTrendingMovies(prevData => [...prevData, ...fetchedData]);
      } catch (error) {
          setFailure(true);
        Notify.failure(error.message);
      
      } finally {
        setFetching(false);
        setLoading(false);
      }
    };
    fetchedMovies(currentPage);
  }, [currentPage]);

  return (
    <>
      <TitleMain>Trending today</TitleMain>
      {loading && <Loader/>}
      {failure && <Error/>}
       {trendingMovies && trendingMovies.length > 0 &&  <MoviesList movies={trendingMovies} /> } 
    </>
  );
};

export default Home;


