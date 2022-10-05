import styled from 'styled-components';

export const FlexCont = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color:${props => props.color || "inherit"};
padding: 15px;
height 15px;

`

export const Wrapper = styled(FlexCont)`
width: 100w;
height: 100vh;
background: #FFFDFA;

`