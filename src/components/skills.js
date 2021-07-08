import React from "react"
import Grid from "./styles/Grid"
import Container from "./styles/Container"
import Title from "./styles/Title"
import Wrapper from "./styles/Wrapper"
import UnderLine from "./styles/UnderLine"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import SkillsList from "../skillList"

const SkillIcon = styled(Icon)`
  transition: 0.7s;
  color: ${props => props.theme.primary};
  &:hover {
    color: #fff;
  }
`
const Line = styled(UnderLine)`
  margin: 0 2.5rem;
  margin-bottom: 4.5rem;
  width: 100px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 3rem;
  }
`
const TechName = styled.h3`
  font-size: 1.2rem;
  text-align: center;
`
const SkillWrapper = styled(Wrapper)`
  width: 20%;
  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 1rem;
  }
`
const Skills = () => {
  return (
    <>
      {SkillsList.map(skill => (
        <SkillWrapper key={skill.name}>
          <SkillIcon icon={skill.icon} width="100" height="100" />
          <TechName>{skill.name}</TechName>
        </SkillWrapper>
      ))}
    </>
  )
}

export default () => (
  <Container>
    <Title>Skills</Title>
    <Line />
    <Grid style={{ flexWrap: "wrap" }}>
      <Skills />
    </Grid>
  </Container>
)
