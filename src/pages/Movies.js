import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { getMovieByQuery } from '../services/theMoiveApi';
import MoviesList from '../components/MoviesList/MoviesList';
import Form from '../components/Form/Form.jsx';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [failure, setFailure] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentParamsQuery = searchParams.get('query');

    if (!currentParamsQuery) return;

    const fetchedMovies = async () => {
      try {
        const fetchedData = await getMovieByQuery(currentParamsQuery);
        if (fetchedData.length === 0) {
          Notify.failure("We've found nothig by this query");
        }
        setMovies(fetchedData);
      } catch (error) {
        setFailure(true);
        Notify.failure(error.message);
      }
    };
    fetchedMovies();
  }, [searchParams]);

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      {movies && movies.length > 0 && <MoviesList movies={movies} />}
         {failure && <strong>Something went wrong, please contact the administrator</strong>}
    </>
  );
};

export default Movies;
