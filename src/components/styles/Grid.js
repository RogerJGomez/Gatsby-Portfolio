import styled from 'styled-components'

const Grid = styled.div`
    padding:0 2% 2% 2%;
    display:flex;
    flex-wrap:no-wrap;
    flex-direction:row;
    align-items:center;
    @media(max-width:768px){
    flex-direction:column;
    flex-wrap:wrap;
    padding:0;
    }
`

export default Grid