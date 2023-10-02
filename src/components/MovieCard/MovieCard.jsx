import {Container,Poster,Title,FirstParagraph,SecondParagraph} from './MovieCard.styled';


const MovieCard = ({posterPath,title,vote_average,overview,genreNames}) => {


    return (

        <Container>
        <Poster src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={title} width='300'/>
        <Title>{title}</Title>
        <p>{vote_average}</p>
        <h2>Overview</h2>
        <FirstParagraph>{overview}</FirstParagraph>
        <h3>Genres</h3>
         <SecondParagraph>{genreNames}</SecondParagraph>
         </Container>
    )

}

export default MovieCard;