import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderText = styled.h3`
    color:purple;
    font-size:1.7rem;
`
const Header = styled.div`
    padding: 0.1rem 1rem;
    background-color: grey;
    position:sticky;
    margin:0;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center
`

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ headerText }) => (
    <Header>
        <HeaderText>{headerText}</HeaderText>
        <ul style={{ listStyle: `none` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
    </Header>
)