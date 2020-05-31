import React from "react"
import { Helmet } from "react-helmet"
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Projects from '../components/projects'
import BackTop from '../components/topScrollAnchor'
import { ThemeProvider } from 'styled-components'
import '../index.css'

const theme = {
  primary: '#23FEB2',
  secondary:'#0a192f'
}

export default () => (
  <ThemeProvider theme = {theme}>
    <Helmet>
      <title>Roger Gómez | Front-End Developer</title>
    </Helmet>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <BackTop/>
  </ThemeProvider>
)
