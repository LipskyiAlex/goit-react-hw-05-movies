import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/theMoiveApi';
import {List,Item,Title} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviewsById(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  const { results } = reviews;

  return (
    <div>
      {results ? (
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
