import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.div`
    padding: 1.5rem;
    background:transparent;

`

const NavBar = styled.nav `
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
`

export default () => (
    <Header>
        <NavBar>
            <Link style={{marginRight:"1rem"}} to="/">Home</Link>
            <Link style={{marginRight:"1rem"}} to="/about">About</Link>
            <Link style={{marginRight:"1rem"}} to="/contact">Contact</Link>
        </NavBar>
    </Header>
)