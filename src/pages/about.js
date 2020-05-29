import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <Link to="/">Home</Link>
    <p>Such wow. Very React.</p>
  </div>
)