import styled from "@emotion/styled"

export const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center; /* Horizontally center content */
  justify-content: center; /* Vertically center content */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin-bottom: 20px;
  width: 300px;
  margin: 0 auto; /* Cent
`

export const Poster = styled.img`

width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
`

export const Title = styled.h1`

font-size: 1.5rem;
margin: 10px 0;

`


export const FirstParagraph = styled.p`
margin: 10px 0;

`

export const SecondParagraph = styled.p`

font-weight: bold;
  color: #3498db; /* Change to your desired color */
  margin-top: 10px;

`