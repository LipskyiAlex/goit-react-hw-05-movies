import { Link, useLocation } from 'react-router-dom';
import { List, Item, Title } from './MoviesList.styled';
import Placeholder from 'components/Placeholder/Placeholder';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const uniqueMoves = Array.from(new Set(movies.map(movie => movie.id))).map(
    id => movies.find(movie => movie.id === id)
  );

  return (
    <List>
      {uniqueMoves.map(({ id, title, name, poster_path }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt={title ? title : name}
                width="200"
              />
            ) : (
              <Placeholder title={`${title} poster`} />
            )}

            <Title>{title ? title : name}</Title>
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default MoviesList;
