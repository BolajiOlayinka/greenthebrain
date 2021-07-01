import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Twitter from './assets/twitter.png';
import Linkedin from './assets/linkedin.png';
import Facebook from './assets/facebook.png';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Nav>
          <One>
            <NavHeading>
              Company 
            </NavHeading>
            <NavLink>
            <div><Link to = "/">About us</Link></div>
            <div><Link to = "/">Contact us</Link></div>
            <div><Link to = "/">Faqs</Link></div>
            </NavLink>
          </One>
          <Two>
            <NavHeading>
              Links
            </NavHeading>
            <NavLink>
            <div><Link to = "/">Privacy</Link></div>
            <div><Link to = "/">Terms and Conditions</Link></div>
            <div><Link to = "/">Faqs</Link></div>
            </NavLink>
          </Two>
          <Three>
            <NavHeading>
              Connect with us
            </NavHeading>
            <SocialMedia>
            <Link to ="/"><img src={Facebook} alt="Green the brain social media icon"/></Link>
            <Link to ="/"><img src={Twitter} alt="Green the brain social media icon"/></Link>
            <Link to ="/"><img src={Linkedin} alt="Green the brain social media icon"/></Link>
            </SocialMedia>
          </Three>
        </Nav>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  background-color: #282727;
  height: 300px;
`;
const Container = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 900px;
    margin: auto;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content:space-around;
  padding-top:80px;
  @media(max-width:576px){
    width:90%;
    flex-wrap:wrap;
    justify-content:space-between;
    padding-left:30px;
  }
`;
const One = styled.div`
@media(max-width:576px){
    width:45%;
  }
`;
const Two = styled.div`
@media(max-width:576px){
    width:45%;
  }
`;
const Three = styled.div`
@media(max-width:576px){
    padding-top:30px;
    width:100%;
  }
`;
const NavHeading = styled.div`
font-weight: 600;
font-size: 22px;
color:white;
padding-bottom:8px;
Noto Sans, san-serif;

`;
const NavLink = styled.div `
a{
    color:#979797;
    text-decoration:none;
    padding-bottom:5px;
    font-size:14px;
    line-height:22px;
}
:nth-child(3){
    width:150px;
    display:flex;
    justify-content:space-between;
    a{
        padding-right:5px;
    }
}
`
const SocialMedia = styled.div `
a{
    padding-right:5px;
    
}
img{
    width:15px;
}
`