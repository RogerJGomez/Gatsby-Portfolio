import React from 'react'
import Grid from './styles/Grid'
import Container from './styles/Container'
import Title from './styles/Title'
import UnderLine from './styles/UnderLine'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import html5Icon from '@iconify/icons-simple-icons/html5'
import sassIcon from '@iconify/icons-simple-icons/sass'
import css3Icon from '@iconify/icons-simple-icons/css3'
import javascriptIcon from '@iconify/icons-simple-icons/javascript'
import styledComponents from '@iconify/icons-simple-icons/styled-components'
import reactIcon from '@iconify/icons-simple-icons/react'
import reduxIcon from '@iconify/icons-simple-icons/redux'
import nodeDotJs from '@iconify/icons-simple-icons/node-dot-js'

const skillsList = [
    {
        name:'HTML',
        icon:html5Icon
    },
    {
        name:'CSS',
        icon:css3Icon
    },
    {
        name:'SCSS',
        icon:sassIcon
    },
    {
        name:'JavaScript',
        icon:javascriptIcon
    },
    {
        name:'React',
        icon:reactIcon
    },
    {
        name:'Redux',
        icon:reduxIcon
    },
    {
        name:'Node.js',
        icon:nodeDotJs
    },
    {
        name:'Styled Components',
        icon:styledComponents
    }
]

const Line = styled(UnderLine)`
    margin:0 2.5rem;
    margin-bottom: 4.5rem;
    width:8%;
    @media(max-width:768px){
        width:30%;
        margin:0 auto;
        margin-bottom:3rem;
    }
`
const Wrapper = styled.div`
    width: 20%;
    text-align:center;
    @media(min-width:1200px){
        padding: 1.5rem;
    }
    @media(max-width:768px){
        width:50%;
        padding: 1.5rem 0;
    }
`
const TechName = styled.h3`
    font-size:1.2rem;
    text-align:center;
`
const Skills = () => {
    return (
        <>
        {skillsList.map(skill => (
            <Wrapper key={skill.name}>
                <Icon icon={skill.icon} width="100" height="100" style={{color:'#23FEB2'}}/>
                <TechName>{skill.name}</TechName>
            </Wrapper>
        ))}
        </>
    )
}

export default () => ( 
    <Container >
        <Title>Skills</Title>
        <Line />
        <Grid style={{flexWrap:'wrap'}}>
            <Skills />
        </Grid>
    </Container>
  )
