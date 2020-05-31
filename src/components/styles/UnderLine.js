import styled from 'styled-components'

const Line = styled.hr`
    margin:0 2.5rem;
    margin-bottom: 2.5rem;
    width:15%;
    border: ${props => props.theme.primary};
    border-top: 4px solid ${props => props.theme.primary};
    border-radius:10px;
    @media(max-width:768px){
        width:55%;
        margin:0 auto;
        margin-bottom:1rem;
    }
`

export default Line