import React from 'react'
import styled from 'styled-components'
import Grid from './styles/Grid' 

const Container = styled.div`
    margin: 7rem 10%;
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
    margin-bottom: 2.5rem;
    width:12.5%;
    border: ${props => props.theme.primary};
    border-top: 4px solid ${props => props.theme.primary};
    border-radius:10px;
    @media(max-width:768px){
        width:55%;
        margin:0 auto;
        margin-bottom:1rem;
    }
`

export default () => (
    <Container>
        <Title>Projects</Title>
        <Line />
        <Grid>
            <h3>PRUEBA</h3>
        </Grid>
    </Container>
  )