import { getCastById } from '../../services/theMoiveApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {List,Item,Title,SubTitle} from './Cast.styled';
import Placeholder from 'components/Placeholder/Placeholder';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { Notify } from 'notiflix';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState({});
  const [loader, setLoader] = useState(false);
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        setLoader(true);
        const castsData = await getCastById(movieId);
        setCasts(castsData);
      } catch (error) {
        setFailure(true);
        Notify.failure(error.message);
      } finally {

        setLoader(false);
      }
    };
  
    fetchCasts();
  }, [movieId]);

  const {cast} = casts;

  return (
    <div>
      {loader && <Loader/>}
      {failure && <Error/>}
      {cast && (
        <List>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              {profile_path ? ( <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name} width='200'/>):<Placeholder title='Photo'/>}   
              <Title>{name}</Title>
              <SubTitle>{character}</SubTitle>
            </Item>
          ))}
        </List>
      )}
    </div>
  );
};

export default Cast;
