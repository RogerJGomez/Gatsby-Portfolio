import React from "react"
import Home from '../components/home'
import About from '../components/about'
import { ThemeProvider } from 'styled-components'
import '../index.css'

const theme = {
  primary: '#23FEB2',
  secondary:'#0a192f'
}

export default () => (
  <ThemeProvider theme = {theme}>
    <Home/>
    <About/>
  </ThemeProvider>
)
