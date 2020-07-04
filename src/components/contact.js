import React from "react"
import Grid from "./styles/Grid"
import Container from "./styles/Container"
import Wrapper from "./styles/Wrapper"
import Title from "./styles/Title"
import UnderLine from "./styles/UnderLine"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import gmailIcon from "@iconify/icons-simple-icons/gmail"
import codepenIcon from "@iconify/icons-simple-icons/codepen"
import githubIcon from "@iconify/icons-simple-icons/github"
import linkedinIcon from "@iconify/icons-simple-icons/linkedin"

const contactData = [
  {
    name: "Github",
    url: "https://github.com/rogerjgomez",
    icon: githubIcon,
  },
  {
    name: "Gmail",
    url: "mailto:gomez.roger779@gmail.com",
    icon: gmailIcon,
  },
  {
    name: "Codepen",
    url: "https://codepen.io/rogerjgomez",
    icon: codepenIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rogerjgomez",
    icon: linkedinIcon,
  },
]

const Line = styled(UnderLine)`
  margin: 0 2.5rem;
  margin-bottom: 4.5rem;
  width: 220px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 3rem;
  }
`
const SkillIcon = styled(Icon)`
  transition: 0.8s;
  &:hover {
    color: #fff !important;
  }
`
const Name = styled.h3`
  font-size: 1.2rem;
  text-align: center;
`
const Link = styled.a`
  &:hover {
    cursor: pointer;
  }
`
const FixedContainer = styled(Container)`
  margin-bottom: 4rem;
`
const Contact = () => {
  return (
    <>
      {contactData.map(data => (
        <Wrapper key={data.name}>
          <Link href={data.url}>
            <SkillIcon
              icon={data.icon}
              width="90"
              height="90"
              style={{ color: "#23FEB2" }}
            />
          </Link>
          <Name>{data.name}</Name>
        </Wrapper>
      ))}
    </>
  )
}

export default () => (
  <FixedContainer>
    <Title>Contact Me</Title>
    <Line />
    <Grid>
      <Contact />
    </Grid>
  </FixedContainer>
)
