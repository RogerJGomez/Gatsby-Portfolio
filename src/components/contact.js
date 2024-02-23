import React from "react"
import Grid from "./styles/Grid"
import Container from "./styles/Container"
import Wrapper from "./styles/Wrapper"
import Title from "./styles/Title"
import UnderLine from "./styles/UnderLine"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import contactData from "./contactIcons"

const Line = styled(UnderLine)`
  margin: 0 2.5rem;
  margin-bottom: 4.5rem;
  width: 155px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 3rem;
  }
`
const SkillIcon = styled(Icon)`
  color: ${props => props.theme.primary};
  transition: 0.8s;
  &:hover {
    color: #fff;
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
  color: ${props => props.theme.primary};
  transition: 0.8s;
  &:hover {
    color: #fff;
  }
`
const FaIcon = styled.i`
  font-size: 100px;
`
const FixedContainer = styled(Container)`
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`
const Contact = () => {
  return (
    <>
      {contactData.map(data => (
        <Wrapper key={data.name}>
          <Link href={data.url}>
            {data.type === "icon" ? (
              <SkillIcon icon={data.icon} width="90" height="90" />
            ) : (
              <FaIcon className={data.icon} width="90" height="90" />
            )}
          </Link>
          <Name>{data.name}</Name>
        </Wrapper>
      ))}
    </>
  )
}

export default () => (
  <FixedContainer>
    <Title>Contact</Title>
    <Line />
    <Grid>
      <Contact />
    </Grid>
  </FixedContainer>
)
