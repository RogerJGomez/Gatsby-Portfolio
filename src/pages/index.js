import React from "react"
import { Helmet } from "react-helmet"
import Home from "../components/home"
import About from "../components/about"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Projects from "../components/projects"
import BackTop from "../components/topScrollAnchor"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const theme = {
  primary: "#23FEB2",
  secondary: "#0a192f",
  color: "white",
}

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Comfortaa';
    src: url('/comfortaa.ttf') format('ttf'),
    url('/comfortaa.ttf')  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
      font-size: 16px;
  }

  html {
      scroll-behavior: smooth;
  }

  body {
      overflow-x: hidden;
      margin:0;
      font-family: 'Comfortaa', cursive;
      color: ${theme.color};
      background: ${theme.secondary};
  }

  body::-webkit-scrollbar {
      width: 0.50rem;
  }

  body::-webkit-scrollbar-track {
      background: transparent;
  }

  body::-webkit-scrollbar-thumb {
      background:${theme.primary};
      border-radius: 20px;
  }

  a {
      text-decoration: none;
      color:${theme.color};
      transition: 0.4s;
  }

  a:hover {
      color:${theme.primary};
      cursor: pointer;
  }

  .none {
      display: none
  }

  p {
    font-size:1rem
  }
`

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <title>Roger Gómez | Front-End Developer</title>
      </Helmet>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <BackTop />
    </ThemeProvider>
  )
}

export default Index
