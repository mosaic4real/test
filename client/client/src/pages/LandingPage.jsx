import React from "react";
import { Link } from "react-router-dom";
import { Background, Image, Contenedor, Button } from './styles/LandingPage'
import ImgLanding from '../components/img/landing.webp'

export default function LandingPage(){

    return(
        <>
        <Background>
             <Image src={ImgLanding} alt="" />
        </Background> 
        <Contenedor>
            <h2>Buy and sell, to continue creating the music you love...</h2>
            <h1>GEMOS.</h1>
            <h2></h2>
            <Link to='/home'>
             <Button>Welcome!!</Button>
            </Link>
        </Contenedor>
        </>
    )
}