import styled from "@emotion/styled"
import colors from '../../utilites/colors';
export const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${colors.backgroundDark}; 
  color: ${colors.textLight}; 
  width: 300px;
  margin: 0 auto;
  text-align: center;
 
`;


export const Poster = styled.img`

width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px; 
`;

export const Title = styled.h1`

font-size: 24px;
  margin: 10px 0;
color: ${colors.textLight};

`


export const FirstParagraph = styled.p`
margin: 10px 0;
color: ${colors.textLight};
`

export const SecondParagraph = styled.p`

font-weight: bold;
  color: ${colors.textLight}; 
  margin-top: 10px;

`

export const FirstSubTitle = styled.h2`

color: ${colors.accentRed}; 
`

export const SecondSubTitle = styled.h2`

color: ${colors.accentRed}; 
`