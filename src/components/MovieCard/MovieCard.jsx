import {Container,Poster,Title,FirstParagraph,SecondParagraph,FirstSubTitle,SecondSubTitle} from './MovieCard.styled';


const MovieCard = ({posterPath,title,vote_average,overview,genreNames}) => {


    return (

        <Container>
        <Poster src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={title} width='300'/>
        <Title>{title}</Title>
        <p>{vote_average}</p>
        <FirstSubTitle>Overview</FirstSubTitle>
        <FirstParagraph>{overview}</FirstParagraph>
        <SecondSubTitle>Genres</SecondSubTitle>
         <SecondParagraph>{genreNames}</SecondParagraph>
         </Container>
    )

}

export default MovieCard;