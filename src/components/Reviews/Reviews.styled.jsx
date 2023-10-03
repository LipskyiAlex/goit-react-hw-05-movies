import styled from "@emotion/styled";


export const List = styled.ul`

    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
   margin-right: auto;

`

export const Item = styled.li`
  
 color:inherit;

 transition: transform 0.2s ease;

 box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
 
 :hover {

    transform: scale(1.05);
    font-weight: 500;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 }

`

export const Title = styled.p`

 max-width:200px;
 text-align:center;



`