import React from 'react';
import styled from 'styled-components';

export default function TitleHead(props) {
    return (
        <Title>
            {props.text}
        </Title>
    )
}

const Title = styled.h2 `
font-family: 'Nunito', sans-serif;
text-align:center;
font-weight: bold;
font-size: 50px;
margin-bottom:0px;
color:var(--mainGreen);
`