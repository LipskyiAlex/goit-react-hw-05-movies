import styled from "@emotion/styled";


export const Wrapper = styled.div`

width: 60px;
margin: 0 auto;


`

export const Wheel =  styled.div`
animation: spin 1s infinite linear;
border: 2px solid rgba(30, 30, 30, 0.5);
border-left: 4px solid #fff;
border-radius: 50%;
height: 50px;
margin-bottom: 10px;
width: 50px;

`


export const Text =  styled.div`
color: #fff;
font-family: arial, sans-serif;


&::after  {

    content: 'Loading';
    animation: load 2s linear infinite;
}
`