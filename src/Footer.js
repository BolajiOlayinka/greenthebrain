import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterWrapper>
        <Container>

        </Container>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.div `
background-color:#282727;
height:300px;

`
const Container = styled.div `
width:100%;
@media(min-width:1200px){
    width:1200px;
    margin:auto;
}
`