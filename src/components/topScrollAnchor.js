import React from "react"
import styled from "styled-components"

const BackTop = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  @keyframes uparrow {
    0% {
      -webkit-transform: translateY(0);
      opacity: 0.4;
    }
    100% {
      -webkit-transform: translateY(-0.4em);
      opacity: 0.9;
    }
  }
  border-color: transparent;
  border-style: solid;
  border-width: 0 1.5rem;
  animation: uparrow 0.8s infinite alternate ease-in-out;
  border-bottom: 1.5rem solid ${props => props.theme.primary};
`
const BackTopContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-end;
  padding: 2% 0;
  @media (max-width: 768px) {
    padding-bottom: 10%;
  }
`
const scrollTo = target => {
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

export default () => (
  <BackTopContainer>
    <BackTop onClick={() => scrollTo(document.getElementById("home"))} />
  </BackTopContainer>
)
