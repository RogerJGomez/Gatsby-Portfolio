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
  line-height: 1.7rem;
  font-size: 1.2rem;
`
export default () => (
  <Container id="about">
    <Title>About Me</Title>
    <Line />
    <Grid>
      <ImageSection>
        <Avatar draggable={false} src="/profile-pic.jpeg" alt="avatar" />
      </ImageSection>
      <TextDiv>
        <AboutText>
          24 year-old Front-end developer. I'm an avid tech enthusiast, trying
          to keep in touch with current and emerging technologies and aiming to
          learn and improve my skills every day.
        </AboutText>
        <AboutText>
          Currently i'm working as a react developer on Vascar Solutions, where
          I'm part of the front-end team. I like teamwork and constantly
          learning from my co-workers.
        </AboutText>
      </TextDiv>
    </Grid>
  </Container>
)
