import { useState,useEffect } from 'react';
import { Notify } from 'notiflix';
import { getMovieByQuery } from '../services/theMoiveApi';
import  MoviesList from '../components/MoviesList/MoviesList';
import throttle from 'lodash.throttle';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

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
    if(currentPage ===1) return;
    const fetchedMovies = async (page,query) => {
      try {
        setFetching(true);
        const fetchedData = await getMovieByQuery(query,page);
        if(fetchedData.results.length === 0) {

          Notify.failure("We've found nothig by this query");
        }
        setMovies(prevData => [...prevData, ...fetchedData.results]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setFetching(false);
      }
    };
    fetchedMovies(currentPage,query);
  }, [currentPage,query]);


  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (query.trim() === '') {
      return Notify.failure("query can't be empty");
    }

    try {
      setCurrentPage(1)
      const fetchData = await getMovieByQuery(query,1);
     
      setMovies(fetchData.results);
      setFetching(false);
    } catch (error) {
      Notify.failure(error.message);
    }
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={e => handleChange(e)} name="text" />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
