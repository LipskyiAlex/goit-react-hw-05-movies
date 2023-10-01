
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getReviewsById} from '../../services/theMoiveApi';
const Reviews = () => {
     
    
    const {movieId} = useParams();

    const [reviews,setReviews] = useState({})

    useEffect(() => {

        getReviewsById(movieId)
        .then(data => setReviews(data));

    }, [movieId])

    const {results} = reviews;
;
    return ( 
        
        <div>
            {results? (  <ul>
           {results.map(({author,id,content}) => (
            
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
           ) )}       
        </ul>) : <p>Something went wrong</p>}
        </div>
      
    )

}

export default Reviews;