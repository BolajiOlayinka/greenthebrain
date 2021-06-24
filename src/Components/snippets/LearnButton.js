import React from 'react';
import styled from 'styled-components';

export default function LearnButton(props) {
    return (
        <AboutButton style={{backgroundColor:props.backgroundColor}}>
        <div><img src={props.iconImage} alt="Learn Bulb"/></div><div>{props.buttonText}</div>
    </AboutButton>   
    )
}

const AboutButton = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:184px;
height:48px;
margin:auto;
margin-top:30px;
margin-bottom:30px;
text-align:center;
box-shadow: -20px 30px 25px rgba(206, 206, 206, 0.25);
border-radius: 25px 25px 0px 25px;
color:#FBD50D;
img{
    width:35px;
    
}

div{
    align-content:center;
    :first-child{
        width:35px;
        height:35px;
        margin-right:10px;
    }
}
`