import { useState, useEffect, useRef } from 'react';
import { getMovieById } from '../services/theMoiveApi';
import MovieCard from '../components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { Notify } from 'notiflix';
import {
  NavLink,
  useParams,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import { Title, List, Item } from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [failure, setFailure] = useState(false);
  const backLinkHref = useRef(location.state?.from?? '/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoader(true);
        const movieData = await getMovieById(movieId);
       
        setMovie(movieData);
      } catch (error) {
        setFailure(true);
        Notify.failure(error.message);
      } finally {

        setLoader(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path } = movie;

  const genreNames = genres ? genres.map(genre => genre.name).join(' ') : '';
  const posterPath = poster_path ? poster_path : '';

  return (
    <>
      <Link to={backLinkHref.current}>Back to movies</Link>
      
      <MovieCard
        posterPath={posterPath}
        title={title}
        vote_average={vote_average}
        overview={overview}
        genreNames={genreNames}
      />
      {loader && <Loader/>}
      {failure && <Error/>}
      <Title>Additional informations</Title>
      <List>
        <Item>
          <NavLink to={`cast`}>
            Cast
          </NavLink>
        </Item>
        <Item>
          <NavLink to={`reviews`}>
            Reviews
          </NavLink>
        </Item>
      </List>
      <Outlet />
    </>
  );
};

export default MovieDetails;
