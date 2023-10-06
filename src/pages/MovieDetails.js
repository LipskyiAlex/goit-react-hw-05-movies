import { useState, useEffect } from 'react';
import { getMovieById } from '../services/theMoiveApi';
import MovieCard from '../components/MovieCard/MovieCard';
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
  const [failure, setFailure] = useState(false);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieById(movieId);
       
        setMovie(movieData);
      } catch (error) {
        setFailure(true);
        Notify.failure(error.message);
      }
    };

    fetchMovie();
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path } = movie;

  const genreNames = genres ? genres.map(genre => genre.name).join(' ') : '';
  const posterPath = poster_path ? poster_path : '';

  return (
    <>
      <Link to={backLinkHref}>Back to products</Link>
      <MovieCard
        posterPath={posterPath}
        title={title}
        vote_average={vote_average}
        overview={overview}
        genreNames={genreNames}
      />
      {failure && <strong>Something went wrong, please contact the administrator</strong>}
      <Title>Additional informations</Title>
      <List>
        <Item>
          <NavLink to={`cast`} id={movieId}>
            Cast
          </NavLink>
        </Item>
        <Item>
          <NavLink to={`reviews`} id={movieId}>
            Reviews
          </NavLink>
        </Item>
      </List>
      <Outlet />
    </>
  );
};

export default MovieDetails;
