import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/theMoiveApi';
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
        <ul>
          {results.map(({ author, id, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
