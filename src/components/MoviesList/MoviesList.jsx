import { Link } from 'react-router-dom';
import {Item} from './MoviesList.styled';

export const MoviesList = ({trendingMovies}) => {

    return (       
        <ul>
          {trendingMovies.map(({id,title,name,poster_path}) => (
              <Item key={id}>
               <Link to={`/movies/${id}`} state={{from: '/'}}>
               <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title?title:name} width='200'/>
               <p>{title?title:name}</p>
                </Link>
              </Item>
           ))}
        </ul>

    )

}