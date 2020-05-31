import React from 'react'
import Grid from './styles/Grid'
import Container from './styles/Container'
import Title from './styles/Title'
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

const Line = styled.hr`
    margin:0 2.5rem;
    margin-bottom: 4.5rem;
    width:8%;
    border: ${props => props.theme.primary};
    border-top: 4px solid ${props => props.theme.primary};
    border-radius:10px;
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
        width:90%;
        padding: 1.5rem;
    }
`
const TechName = styled.h3`
    font-size:1.2rem;
    text-align:center;
`
export default () => ( 
    <Container >
        <Title>Skills</Title>
        <Line />
        <Grid style={{flexWrap:'wrap'}}>
            <Wrapper>
                <Icon icon={html5Icon} width="100" height="100" style={{color:'#23FEB2'}}/>
                <TechName>HTML</TechName>
            </Wrapper>
            <Wrapper>
                <Icon icon={css3Icon} width="100" height="100" style={{color:'#23FEB2'}}/>
                <TechName>CSS</TechName>
            </Wrapper>
            <Wrapper>
                <Icon icon={sassIcon} width="100" height="100" style={{color:'#23FEB2'}}/>
                <TechName>SCSS</TechName>
            </Wrapper>
            <Wrapper>
                <Icon icon={javascriptIcon} width="100" height="100" style={{color:'#23FEB2'}}/>
                <TechName>JavaScript</TechName>
            </Wrapper>
            <Wrapper>
                <Icon icon={reactIcon} width="100" height="100" style={{color:'#23FEB2'}}/>
                <TechName>React</TechName>
            </Wrapper>
            <Wrapper>
                <Icon icon={reduxIcon} width="100" height="100" style={{color:'#23FEB2'}}/>
                <TechName>Redux</TechName>
            </Wrapper>
            <Wrapper>
                <Icon icon={nodeDotJs} width="100" height="100" style={{color:'#23FEB2'}}/>
                <TechName>Node.js</TechName>
            </Wrapper>
            <Wrapper>
                <Icon icon={styledComponents} width="100" height="100" style={{color:'#23FEB2'}}/>
                <TechName>Styled Components</TechName>
            </Wrapper>
        </Grid>
    </Container>
  )
