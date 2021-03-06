import React from "react"
import styled from "styled-components"
import Grid from "./styles/Grid"
import Container from "./styles/Container"
import Title from "./styles/Title"
import UnderLine from "./styles/UnderLine"

const Line = styled(UnderLine)`
  margin: 0 2.5rem;
  margin-bottom: 2.5rem;
  width: 185px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`
const ImageSection = styled.div`
  border: 4px solid ${props => props.theme.primary};
  margin: 1rem;
  border-radius: 50%;
  width: 20%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 65%;
    margin: 0 auto;
  }
`
const Avatar = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`
const TextDiv = styled.div`
  padding: 1% 3%;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
    padding: 0;
  }
`
const AboutText = styled.p`
  text-align: justify;
  line-height: 1.5rem;
`
export default () => (
  <Container id="about">
    <Title>About Me</Title>
    <Line />
    <Grid>
      <ImageSection>
        <Avatar draggable={false} src="/rg.jpg" alt="avatar" />
      </ImageSection>
      <TextDiv>
        <AboutText>
          Front-end developer from Venezuela. Currently working at an
          Argentinian marketing agency, Clichead, where I'm in charge of
          developing and maintaining dozens of websites built with WordPress,
          for small and medium sized businesses based all over the world.
        </AboutText>
        <AboutText>
          I'm an avid tech enthusiast, trying to keep in touch with current and
          emerging technologies and aiming to learn and improve my skills every
          day.
        </AboutText>
      </TextDiv>
    </Grid>
  </Container>
)
