import React from 'react'
import Grid from './styles/Grid'
import Container from './styles/Container'
import Title from './styles/Title'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import gmailIcon from '@iconify/icons-simple-icons/gmail'
import codepenIcon from '@iconify/icons-simple-icons/codepen'
import githubIcon from '@iconify/icons-simple-icons/github'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'

const Line = styled.hr`
    margin:0 2.5rem;
    margin-bottom: 4.5rem;
    width:18%;
    border: ${props => props.theme.primary};
    border-top: 4px solid ${props => props.theme.primary};
    border-radius:10px;
    @media(max-width:768px){
        width:65%;
        margin:0 auto;
        margin-bottom:3rem;
    }
`
const Wrapper = styled.div`
    width: 25%;
    text-align:center;
    @media(min-width:1200px){
        padding: 1.5rem;
    }
    @media(max-width:768px){
        width:90%;
        padding: 1.5rem;
    }
`
const Name = styled.h3`
    font-size:1.2rem;
    text-align:center;
`
const Link = styled.a`
    &:hover {
        cursor:pointer;
    }
`
export default () => ( 
    <Container>
        <Title>Contact Me</Title>
        <Line/>
        <Grid>
            <Wrapper>
                <Link href="https://github.com/rogerjgomez"><Icon icon={githubIcon} width="100" height="100" style={{color:'#23FEB2'}}/></Link>
                <Name>Github</Name>
            </Wrapper>
            <Wrapper>
                <Link href="mailto:gomez.roger779@gmail.com"><Icon icon={gmailIcon} width="100" height="100" style={{color:'#23FEB2'}}/></Link>
                <Name>Gmail</Name>
            </Wrapper>
            <Wrapper>
                <Link href="https://codepen.io/rogerjgomez"><Icon icon={codepenIcon} width="100" height="100" style={{color:'#23FEB2'}}/></Link>
                <Name>Codepen</Name>
            </Wrapper>
            <Wrapper>
                <Link href="https://www.linkedin.com/in/rogerjgomez"><Icon icon={linkedinIcon} width="100" height="100" style={{color:'#23FEB2'}}/></Link>
                <Name>LinkedIn</Name>
            </Wrapper>
        </Grid>
    </Container>
  )
