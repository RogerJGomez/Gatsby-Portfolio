import styled from 'styled-components'

const UnderLine = styled.hr`
    border: ${props => props.theme.primary};
    border-top: 4px solid ${props => props.theme.primary};
    border-radius:10px;
`
export default UnderLine