import styled from "@emotion/styled";


export const List = styled.ul`

    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
     margin: 0 auto;
    padding: 0;
    list-style: none;


`

export const Item = styled.li`
  
padding:5px;
 color:inherit;

 transition: transform 0.2s ease;

 box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
 
 :hover {

    transform: scale(1.05);
    font-weight: 500;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 }

`

export const Title = styled.h3`

 max-width:200px;
 text-align:center;



`

export const SubTitle = styled.p`
max-width:200px;
text-align:center;

`

export const Placeholder = styled.div`
 
width:200px;
height: 300px;
background-color: #fff;
font-style: italic;
display:flex;
justify-content:center;
align-items:center;
`
