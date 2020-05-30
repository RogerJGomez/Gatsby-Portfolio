import React from 'react'
import Header from './header'
import styled from 'styled-components'

const Container = styled.div`
    margin:0 5rem;
`

export default ({children}) => (
    <>
        <Header/>
        <Container>     
            {children}
        </Container>
    </>
)