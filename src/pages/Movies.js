import { useState,useEffect} from 'react';
import {Notify} from 'notiflix';
import {getMovieByQuery} from '../services/theMoiveApi';
import {MoviesList} from '../components/MoviesList/MoviesList';

const Movies = () => {

    useEffect(() => {
        const onscroll = function () {
           if (window.innerHeight + window.scrollY >= document.body.offsetheight) {
             console.log("you're at the bottom of the page")
           }
        }
        window.addEventListener('scroll', onscroll)
        return () => window.removeEventListener('scroll', onscroll)
     }, [])
     
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

        <>
         <form onSubmit={handleSubmit} >
            <input onChange={e => handleChange(e)} name="text"/>
            <button type='submit'>Search</button>
         </form>
           <MoviesList movies={movies}/>
        </>
    )

}

export default Movies;