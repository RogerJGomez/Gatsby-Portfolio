import React from 'react'
import styled from 'styled-components'

const BackTop = styled.a`
    position: relative;
    top:95%;
    left:95%; 
    z-index: 99; 
    color: white; 
    cursor: pointer; 
    font-size: 18px;
    @keyframes uparrow {
    0% { -webkit-transform: translateY(0); opacity: 0.4 }
    100% { -webkit-transform: translateY(-0.4em); opacity: 0.9 }
    }
    border-color:transparent;
    border-style:solid;
    border-width:0 1.5rem;  
    opacity:0.4;
    height:0;
    text-indent:-9999px;
    transform-origin: 50% 50%;
    width:0;
    animation: uparrow 0.6s infinite alternate ease-in-out;
    border-bottom:1.5rem solid ${props => props.theme.primary};
    @media(max-width:768px){
        left:80%;
    }
`
const scrollTo = target => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

export default () => ( 
    <BackTop onClick={()=> scrollTo(document.getElementById('home'))}/>
)
