import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'

const particlesParams = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}
  
const ParticlesDiv = styled.div`
    z-index: -1;
    position:absolute;
    width:100%;
    height:100%;
  `
const Title = styled.h1`
    font-size:70px;
    text-align:center;
    padding-top:30vh;
    line-height:25px;

    @media(max-width:768px){
        line-height:80px;
    }
`
const Subtitle = styled.h2`
    font-size:35px;
    text-align:center;
    color:${props => props.theme.primary};
    line-height:25px;
    @media(max-width:768px){
        line-height: 45px;
    }
`
const Skills = styled.h2`
    font-size:25px;
    text-align:center;
    line-height:25px;
`
const Container = styled.div`
    height:100vh;
    @media(max-width:768px){
        width:100%;
    }
`
const Arrow = styled.a`
    @keyframes downarrow {
    0% { -webkit-transform: translateY(0); opacity: 0.4 }
    100% { -webkit-transform: translateY(0.4em); opacity: 0.9 }
    }
    border-color:transparent;
    border-style:solid;
    border-width:0 1.5rem;
    display:block;
    height:0;
    margin:5rem auto;
    opacity:0.4;
    text-indent:-9999px;
    transform-origin: 50% 50%;
    width:0;
    animation: downarrow 0.6s infinite alternate ease-in-out;
    border-top:1.5rem solid white;
    transition: 0.3s;
    
    &:hover {
        cursor:pointer;
        border-top:1.5rem solid ${props => props.theme.primary};
    }
`

export default () => ( 
    <Container id="home">
        <ParticlesDiv><Particles height="100vh" params={particlesParams} /></ParticlesDiv> 
        <Title>
            Roger Gómez
        </Title>
        <Subtitle>Front-End Developer</Subtitle>
        < Skills>React | HTML | SCSS | Redux</Skills>
        <Arrow href="#about" />
    </Container>
  )