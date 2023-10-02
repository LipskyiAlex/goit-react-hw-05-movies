import { Link,useLocation } from 'react-router-dom';
import {Item} from './MoviesList.styled';

export const MoviesList = ({movies}) => {
    const location = useLocation();

    return (       
        <ul>
          {movies.map(({id,title,name,poster_path}) => (
              <Item key={id}>
               <Link to={`/movies/${id}`} state={{from:location}}>
               <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title?title:name} width='200'/>
               <p>{title?title:name}</p>
                </Link>
              </Item>
           ))}
        </ul>

    )

}