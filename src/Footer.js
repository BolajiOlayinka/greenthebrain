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
            <NavLink>
            <Link to ="/"><img src={Facebook} alt="Green the brain social media icon"/></Link>
            <Link to ="/"><img src={Twitter} alt="Green the brain social media icon"/></Link>
            <Link to ="/"><img src={Linkedin} alt="Green the brain social media icon"/></Link>
            </NavLink>
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
`;
const One = styled.div`

`;
const Two = styled.div`

`;
const Three = styled.div`

`;
const NavHeading = styled.div`
font-weight: 600;
font-size: 24px;
color:white;
`;
const NavLink = styled(Link) `
a{
    color:#979797;
    text-decoration:none;
    padding-bottom:5px;
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