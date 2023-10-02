import { useState} from 'react';
import {Notify} from 'notiflix';
import {getMovieByQuery} from '../services/theMoiveApi';
import {MoviesList} from '../components/MoviesList/MoviesList';

const Movies = () => {

     
    const [query,setQuery] = useState('');
    const [movies,setMovies] = useState([]);

    const handleChange = e => {       
        setQuery(e.target.value)

    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();


        if(query.trim() === '') {

            return Notify.failure("query can't be empty");
        }
     
        try {

            const fetchData = await getMovieByQuery(query)

            setMovies(fetchData.results);


        } catch (error) {

            Notify.failure(error.message);
        }
         
    }
     
    return (

        <div>
         
         <form onSubmit={handleSubmit} >
            <input onChange={e => handleChange(e)} name="text"/>
            <button type='submit'>Search</button>
         </form>
           <MoviesList movies={movies}/>
        </div>
    )

}

export default Movies;