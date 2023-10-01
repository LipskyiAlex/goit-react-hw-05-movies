import { getCastById } from '../../services/theMoiveApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState({});

  useEffect(() => {
    getCastById(movieId)
    .then(data => {
      setCasts(data);

    });
  }, [movieId]);

  const {cast} = casts;

  return (
    <div>
      {cast ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name} width='200'
                onError={(e) => {
                    e.target.src = '/placeholder.jpg'; 
                  }}
              />
              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading cast information...</p>
      )}
    </div>
  );
};

export default Cast;
