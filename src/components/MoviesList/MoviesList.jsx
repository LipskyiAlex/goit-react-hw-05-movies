import { Link,useLocation } from 'react-router-dom';
import {List,Item,Title} from './MoviesList.styled';

const MoviesList = ({movies}) => {

    const location = useLocation(); 

    const uniqueMoves = Array.from(new Set(movies.map((movie) => movie.id))).map((id) => movies.find((movie) => movie.id === id));

    return (    

        <List>
          {uniqueMoves.map(({id,title,name,poster_path}) => (
              <Item key={id}>
               <Link to={`/movies/${id}`} state={{from:location}}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title?title:name} width='200'/>
               <Title>{title?title:name}</Title>
                </Link>
              </Item>
           ))}
        </List>

    )

}

export default MoviesList;