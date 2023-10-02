import { useState, useEffect} from 'react';
import {getMovieById} from '../services/theMoiveApi';
import { NavLink,useParams,Outlet,useLocation,Link } from "react-router-dom"
const MovieDetails = () => {

    const location = useLocation();
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);
    const backLinkHref = location.state?.from??'/';

    useEffect(() => {

        const fetchMovie = async () => {

            try {

                const movieData = await getMovieById(movieId)
                const {title = "No title",vote_average,overview, genres,poster_path} = movieData;
                setMovie({ title, vote_average, overview, genres, poster_path });
            } catch (error) {

                console.log(error.messsage);
            }
            }
            
            fetchMovie();
        
    },[movieId])


    const { title, vote_average, overview, genres, poster_path } = movie;
 
     const genreNames = genres?genres.map((genre) => genre.name).join(" "):'';
     const posterPath = poster_path?poster_path:'';
     
     return (
     
        <div>
            <Link to={backLinkHref}>Back to products</Link>
            <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={title} width='300'/>
            <h1>{title}</h1>
            <p>{vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
             <p>{genreNames}</p>

             <h3>Additional informations</h3>
             <ul>
                <li><NavLink to={`/movies/${movieId}/cast`} id={movieId}>Cast</NavLink>
               </li>
                <li><NavLink to={`/movies/${movieId}/reviews`} id={movieId}>Reviews</NavLink>
                </li>
             </ul>
             <Outlet/>
        </div>

    )

}

export default MovieDetails;