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
    height:100vh;
  `
const Title = styled.h1`
    font-size:70px;
    text-align:center;
    padding-top:30vh;
`
const Subtitle = styled.h2`
    font-size:35px;
    text-align:center;
    color:#23FEB2;
`

export default () => ( 
    <>
        <ParticlesDiv><Particles height="100vh" params={particlesParams} /></ParticlesDiv> 
        <Title>
            Roger Gómez
        </Title>
        <Subtitle>Front-End Developer</Subtitle>
    </>
  )
