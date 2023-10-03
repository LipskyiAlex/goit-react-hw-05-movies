import { getCastById } from '../../services/theMoiveApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {List,Item,Title,SubTitle} from './Cast.styled';
const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState({});

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const castsData = await getCastById(movieId);
        setCasts(castsData);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchCasts();
  }, [movieId]);

  const {cast} = casts;

  return (
    <div>
      {cast ? (
        <List>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name} width='200'
                onError={(e) => {
                    e.target.src = '/placeholder.jpg'; 
                  }}
              />
              <Title>{name}</Title>
              <SubTitle>{character}</SubTitle>
            </Item>
          ))}
        </List>
      ) : (
        <p>Loading cast information...</p>
      )}
    </div>
  );
};

export default Cast;
