import React, { useEffect, useState } from 'react'
import { loadCSS } from 'fg-loadcss'
import styled from 'styled-components'
import Grid from './styles/Grid'
import Container from './styles/Container'
import Title from './styles/Title'
import ScaleLoader from "react-spinners/ScaleLoader"
import Projects from '../projectsData'

const Line = styled.hr`
    margin:0 2.5rem;
    margin-bottom: 4.5rem;
    width:12.5%;
    border: ${props => props.theme.primary};
    border-top: 4px solid ${props => props.theme.primary};
    border-radius:10px;
    @media(max-width:768px){
        width:45%;
        margin:0 auto;
        margin-bottom:3rem;
    }
`
const TextSection = styled.div`
    width:40%;
    padding:2%;
    @media(max-width:768px){
        width:100%;
    }
`
const ProjectTitle = styled.h2`
    text-align:right;
    font-size:2.2rem;
    color: ${props => props.theme.primary};
    @media(max-width:768px){
        text-align:center;
    }
`
const ProjectText = styled.p`
    text-align:justify;
`
const Technologies = styled.p`
    text-align:right;
    font-size:0.95rem;
`
const LinksSection = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-end;
`
const ImageSection = styled.div`
    width:60%;
    text-align:center;
    @media(max-width:768px){
        width:90%
    }
`
const Image = styled.img`
    width:100%;
    height:100%;
    border-radius:10px;
`
const Links = styled.a`
    font-size:1.5rem;
    margin:0 0.5rem;
`
const Icon = styled.i`
    font-size:1.3rem;
`
const ArrowsGrid = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const ArrowButtons = styled.div`
    transition:0.3s;
    &:hover {
        cursor:pointer;
        transform: scale(1.2);
        color:${props => props.theme.primary};
    }
`
const Content = ({ setPreloader }) => {

    const [loading, setImgLoaded] = useState(true);
    const [currentItem, setCurrentItem] = useState(0);

    const changeProject = (direction) => {
        setImgLoaded(true);
        direction==='left' 
        ? currentItem===0 ? setCurrentItem(Projects.length-1) : setCurrentItem((currentItem-1))
        : currentItem===Projects.length-1 ? setCurrentItem(0) : setCurrentItem((currentItem+1))
    }

    useEffect(() => {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
      }, [])

    return (  
        <Container>
            <Title>Projects</Title>
            <Line />
            <Grid>
            <ImageSection><Image draggable={false} src={`/${Projects[currentItem].id}.jpg`} className={loading? 'none' : 'block'}alt="projects" onLoad={() => {setImgLoaded(false); setPreloader(false)}}/>      
            <ScaleLoader
            size={120}
            color={"#23FEB2"}
            loading={loading}
            /></ImageSection>
            <TextSection>
                <ProjectTitle>{Projects[currentItem].name}</ProjectTitle> 
                <ProjectText>{Projects[currentItem].description}</ProjectText>
                <Technologies>{Projects[currentItem].techs}</Technologies>
                <LinksSection>
                    <Links href={Projects[currentItem].links[0]}><Icon className="fab fa-github"/></Links>
                    <Links href={Projects[currentItem].links[1]}><Icon className="fa fa-external-link-alt"/></Links>
                </LinksSection>
            </TextSection>
            </Grid>
            <ArrowsGrid>
                <ArrowButtons onClick={() => changeProject('left')}><Icon className="fa fa-arrow-left"></Icon></ArrowButtons>
                <ArrowButtons onClick={() => changeProject('right')}><Icon className="fa fa-arrow-right"></Icon></ArrowButtons>
            </ArrowsGrid>
        </Container>
    )
}

export default Content;