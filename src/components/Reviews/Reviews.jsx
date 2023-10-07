import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/theMoiveApi';
import {List,Item,Title} from './Reviews.styled';
import Loader from 'components/Loader/Loader';
import Error from '../Error/Error';
import { Notify } from 'notiflix';

const Reviews = () => {
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  const [reviews, setReviews] = useState({});
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoader(true);
        const reviewsData = await getReviewsById(movieId);
        setReviews(reviewsData);
      } catch (error) {
        Notify.failure(error.message);
        setFailure(true);
      } finally {

        setLoader(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  const { results } = reviews;

  
  return (
    <div>
      {loader && <Loader/>} 
      {failure && <Error/>}
      {results && results.length > 0? (
        <List>
          {results.map(({ author, id, content }) => (
            <Item key={id}>
              <Title>Author: {author}</Title>
              <p>{content}</p>
            </Item>
          ))}
        </List>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
      
    </div>
  );
};

export default Reviews;
