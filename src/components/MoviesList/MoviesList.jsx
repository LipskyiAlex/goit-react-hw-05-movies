import { Link,useLocation } from 'react-router-dom';
import {List,Item,Title} from './MoviesList.styled';

export const MoviesList = ({movies}) => {
    
    const location = useLocation(); 

    return (    

        <List>
          {movies.map(({id,title,name,poster_path}) => (
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