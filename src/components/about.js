import React from "react"
import styled from 'styled-components'

const Container = styled.div`
    margin: 2rem 10%;
    border-radius:10px;
`
const Title = styled.h1`
    padding-left:2.5rem;
    font-size:2.2rem;
    margin-top:1.5rem;
    margin-bottom:0;
    @media(max-width:768px){
        text-align:center;
        padding:0;
    }
`
const Line = styled.hr`
    margin:0 2.5rem;
    width:22%;
    border: ${props => props.theme.primary};
    border-top: 3px solid ${props => props.theme.primary};
    border-radius:10px;
    @media(max-width:768px){
        width:55%;
        margin:0 auto;
        margin-bottom:1rem;
    }
`

const Grid = styled.div`
    padding:0 2% 2% 2%;
    display:flex;
    flex-wrap:no-wrap;
    flex-direction:row;
    align-items:center;

    @media(max-width:768px){
        flex-direction:column-reverse;
        flex-wrap:wrap;
        padding:0;
    }
`
const ImageSection = styled.div`
    border: 2px solid ${props => props.theme.primary};
    border-radius:50%;
    margin:1rem;
    width:35%;

    @media(max-width:768px){
        width:50%
    }
`
const Avatar = styled.img`
    height:100%;
    width:100%;
`
const TextDiv = styled.div`
    padding:1% 3%;
    width:65%;
    @media(max-width:768px){
        width:90%
    }
`
const AboutText = styled.p`
    text-align:justify;
    font-size:1rem;
`
export default () => (
  <Container>
    <Title>About Me</Title>
    <Line />
    <Grid>
        <TextDiv>
            <AboutText>Front-end developer from Venezuela. Currently working at an Argentinian marketing agency, Clichead, where I'm in charge of developing and maintaining dozens of websites built with WordPress, for small and medium sized businesses based all over the world.</AboutText>
            <AboutText>I'm an avid tech enthusiast, trying to keep in touch with current and emerging technologies and aiming to learn and improve my skills every day.</AboutText>
        </TextDiv>
        <ImageSection><Avatar src ="https://rogergomez.netlify.app/cartoon-rg.png" alt="avatar"/></ImageSection>
    </Grid>
  </Container>
)