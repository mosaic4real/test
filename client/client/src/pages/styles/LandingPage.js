import styled from "styled-components";

export const Background = styled.div`
width: 100%; 
height: 100%; 
position: fixed; 
left: 0px; 
top: 0px; 
z-index: -9999;
margin: 0%;
`;
export const Image = styled.img`
width: 100%;
height: 100%;
`;
export const Contenedor = styled.div`
display: flex;
flex-direction: row;
height: 500px;
gap: 10px;
justify-content: center;
color: white;
align-items: center;
flex-direction: column;
font-family: 'Arizonia', cursive;
font-size: 30px;
color: #f5b921;
`;
export const Button = styled.button`
    text-decoration: none;
    border: 3px solid yellow;
    color: transparent;
    padding: 20px 40px;
    background: rgb(34, 34, 34);
    font-size: 30px;
    font-family: 'Arizonia', cursive;
    letter-spacing: 5px;
    transition: all 0.5s;
    position: relative;
    border-radius: 30px 0px;

  &:before {
    content: "Welcome!!";
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    background: rgb(34, 34, 34);    
    font-size: 30px;
    top: 0;
    left: 100%;
    font-family: 'Arizonia', cursive;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(0) rotatey(0);
    opacity: 0;
    border-radius: 30px 0px;
  }
  &:hover:before {
    transform: scale(1) rotatey(360deg);
    left: 0;
    opacity: 1;
    border-radius: 30px 0px;
  }
  &:after {
    content: "Slap Bass!!";
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    background: rgb(34, 34, 34);
    font-size: 30px;
    top: 0;
    left: 0;
    font-family: 'Arizonia', cursive;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(1) rotatey(0);
    opacity: 1;
    border-radius: 30px 0px;
  }
  &:hover:after {
    transform: scale(0) rotatey(360deg);
    left: -100%;
    opacity: 0;    
  }
`;

