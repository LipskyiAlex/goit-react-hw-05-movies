import {Container,Poster,Title,FirstParagraph,SecondParagraph,FirstSubTitle,SecondSubTitle} from './MovieCard.styled';

import Placeholder from 'components/Placeholder/Placeholder';


const MovieCard = ({posterPath,title,vote_average,overview,genreNames}) => {

    return (

        <Container>
        {posterPath ?  <Poster src={`https://image.tmdb.org/t/p/w300${posterPath}`}  alt={title} width="300"/> :
        
        <Placeholder title={`${title} poster`}/>
        }
       
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