import styled from "styled-components";
import { mobile } from "./responsive";
import { open } from "../Navbar";

export const Container = styled.div`
width: 100%;
height: 70px;
background-color: black;
`;

export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;
`;

export const LogoContainer = styled.div`
margin-left: 0.5rem;
text-decoration: none;
  appearance: none;
display: flex;
align-items: center;
font-size: 1.2rem;
font-family: sans-serif;
p {
    &:nth-child(2){
        color: #f5b921;
    }
    &:nth-child(3){
        font-size: 1.5rem;
        font-weight: 500;
        color: #f5b921;
    }
}
`;

export const Logo = styled.h1`
color: #f5b921;
margin-right: 20px;
cursor: pointer;
text-decoration: none;
appearance: none;
font-size: 2rem;
`;

export const SearchCont = styled.div`
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
${mobile({
    width: "100%",    
    justifycontent: "center",    
    flexDirection: "column",
    alignitems: "center",    
 })}
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;
}
${mobile({
    position: "absolute",
    backgroundColor: "black",
    top: "70px",    
    width: "100%",
    height: "90vh",
    justifycontent: "center",    
    flexDirection: "column",
    alignitems: "center",
    transition: "0.5 all ease",
 })}
`;

export const MenuItem = styled.li`
height: 100%;
${mobile({    
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 })}
`;

export const MenuItemLink = styled.h2`
display: flex;
justify-content: center;
text-decoration: none;
  appearance: none;
align-items: center;
height: 100%;
padding: 0.5rem 2.5rem;
color: white;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;

&:hover {
    color: black;
    padding: 20px 10px;    
    background-color: yellow;
    transition: 0.5s all ease;
    border-radius: 10px 0px;
}
${mobile({    
    width: "100%",    
 })}
`;

export const MobileIcon = styled.div`
display: none;
${mobile({ 
    display: "flex",flexdirection: "column", justifycontent: "center", cursor: "pointer"
 })}
 svg {
     fill: #f5b921;
     margin-right: 00.5rem;
 }
`;


