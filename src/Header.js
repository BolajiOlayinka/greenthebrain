import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Nav, NavItem } from "reactstrap";
import Logo from "./assets/Logo.svg";
// import BlueLogo from "../assets/icon-blue.svg";
// import YellowLogo from "../assets/icon-yellow.svg";
import { Link, useLocation } from "react-router-dom";
import { HashLink as Linker } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import animateScrollTo from "animated-scroll-to";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [background, setBackground] = useState("white");
  const [boxshadow, setBoxShadow] = useState("transparent");
  const [fixed, setFixed] = useState("fixed");
  const [showIcon, setShowIcon] = useState(true);
  const [showItem, setShowItem] = useState(false);
  const [navcolor, setNavColor] = useState("black");
  

  // const [SmallBackground, setSmallBackground]=useState("black")
  const ScrollToTop = () => {
    animateScrollTo(0);
  };

  // const ScrollToContact = () => {
  //   animateScrollTo(document.querySelector(".contactform"));
  // };
  const location = useLocation();
  

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setBackground("white");
   
      setBoxShadow("0 0 10px rgba(0,0,0,0.2)");
      setNavColor("black");
    } else if (
      window.pageYOffset === 0 &&
      location.pathname.split("/")[1] === "news"
    ) {
      
      setNavColor("black");
      setBoxShadow("transparent");
    } else if (window.pageYOffset === 0 && location.pathname === "/") {
      
      setNavColor("black");
      setBackground("transparent");
      setBoxShadow("transparent");
    } else {
    
      setBackground("white");
      setBoxShadow("transparent");
      setNavColor("black");
    }
  };

  
  const fixedScroll = () => {
    if (window.pageYOffset >= 0) {
      setFixed("fixed");
    } else {
      setFixed("initial");
    }
  };

  // console.log(window.innerWidth)
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", fixedScroll);


  const toggle = (e) => {
    setShowItem(!showItem, e);
    setShowIcon(!showIcon, e);
  };

  const closeModal = () => {
    setShowItem(false);
    setShowIcon(true);
  };
  return (
    <NavWrapper background={background} boxshadow={boxshadow} fixed={fixed}>
      <StyledNavbar expand="md">
        <LogoContainer>
          <Link
            to="/"
            onClick={() => {
              ScrollToTop();
            }}
          >
            <img src={Logo} alt="Green the brain Logo" />
          </Link>
        </LogoContainer>
        {showItem && (
          <SmallNav>
            <StyledNav navbar>
              <NavItem>
                <StyledLink
                  to="/"
                  
                  onClick={closeModal}
                >
                  Home
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledContactLink
                  to="/"
                  onClick={() => {
                    closeModal();
                   
                  }}
                >
                 About us
                </StyledContactLink>
              </NavItem>
              <NavItem>
                <StyledLink
                  to="/"
                  
                  onClick={() => {
                    closeModal();
                    ScrollToTop();
                  }}
                >
                  Projects
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink
                  to="/"
                  
                  onClick={closeModal}
                >
                  Volunteers
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink
                  to="/"
                 
                  onClick={closeModal}
                >
                  Blog
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink
                  to="/"
                  
                  onClick={closeModal}
                >
                  Donate
                </StyledLink>
              </NavItem>
            </StyledNav>
          </SmallNav>
        )}
        <div onClick={toggle}>
          {showIcon ? (
            <StyledFontAwesome icon={faBars} navcolor={navcolor} />
          ) : (
            <StyledFontCancel icon={faTimesCircle} navcolor={navcolor} />
          )}
        </div>

        <LargeNav className="ml-auto">
          <StyledNav navbar>
            <NavItem>
              <StyledLink
                navcolor={navcolor}
                
                to="/"
                onClick={() => {
                  ScrollToTop();
                }}
              >
                Home
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                navcolor={navcolor}
                to="/"
                
              >
                About Us
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                navcolor={navcolor}
                
                onClick={() => {
                  ScrollToTop();
                }}
              >
                Peojects
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                navcolor={navcolor}
                
                onClick={() => {
                  ScrollToTop();
                }}
              >
                Volunteer
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                navcolor={navcolor}
                
                onClick={() => {
                  ScrollToTop();
                }}
              >
                Blog
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                navcolor={navcolor}
                
                onClick={() => {
                  ScrollToTop();
                }}
              >
                Donate
              </StyledLink>
            </NavItem>
          </StyledNav>
        </LargeNav>
      </StyledNavbar>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  z-index: 12;
  display: flex;
  // flex: auto;
  align-items: center;
  position: ${(props) => props.fixed} !important;
  padding-top: 1em;
  padding-bottom: 1em;
  color: black;
  font-weight:bold;
  background: ${(props) => props.background} !important;
  box-shadow: ${(props) => props.boxshadow} !important;
  transition: 0.5s all;
  width: -webkit-fill-available;
  @media (max-width: 768px) {
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
`;
const LogoContainer = styled.div`
  img {
    width: 150px;
    height:40px;
  }
  @media (max-width: 576px) {
    z-index: 10;
    ${"" /* padding-right:20px; */}
  }
`;
const StyledNav = styled(Nav)`
  margin-left: auto;
  @media (max-width: 767.9px) {
    position: fixed;
    padding-top: 60px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0, 0, 0, 0.9);
    z-index: 5;
    width: 100%;
    ${"" /* padding-top: 80px; */}
    li {
      padding: 4px;
      padding-left: 20px;
      a {
        font-size: 14px !important;
      }
    }
  }
`;
const StyledNavbar = styled(Navbar)`
  flex: auto;
  @media (min-width: 1200px) {
    flex: none;
    width: 1117px;
    margin-left: auto;
    padding-left: 20px;
    padding-right: 20px;

    ${"" /* -ms-ime-width:1200px; */}
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: 768px) and (max-width: 1023.9px) {
    padding-left: 50px;
    padding-right: 30px;
  }
  @media (max-width: 767.9px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.navcolor} !important;
  line-height: 24px;
  margin-right: 33px;
  padding-bottom: 8px;
  font-weight: bold;
  font-size: 16px;
  text-decoration:none;
  :hover {
    color: orange;
    cursor: pointer;
    text-decoration: none;
  }
  :active {
    color: var(--mainGreen);
    transition: border-bottom 0.5s ease-in;
  }

  @media (max-width: 735px) {
    font-size: 12px;
    margin-right: 40px;
  }
  @media (max-width: 767.9px) {
    font-size: 13px;
    line-height: 32px;
    padding-left: 0.5em;
    position: relative;
    z-index: 10;
    color: white;
    :hover {
      border-bottom: 0px;
    }
    :active {
      border-bottom-color: transparent !important;
      border-bottom-style: none !important;
      border-bottom-width: 0 !important;
    }
  }
`;
const StyledContactLink = styled(Linker)`
  color: ${(props) => props.navcolor} !important;
  line-height: 24px;
  margin-right: 33px;
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 16px;

  :hover {
    color: var(--mainGreen);
    cursor: pointer;
    text-decoration: none;
  }
  :active {
    color: var(--mainGreen);

    transition: border-bottom 0.5s ease-in;
  }

  @media (max-width: 735px) {
    font-size: 12px;
    margin-right: 40px;
  }
  @media (max-width: 767.9px) {
    font-size: 13px;
    line-height: 32px;
    padding-left: 0.5em;
    position: relative;
    z-index: 10;
    color: white;
    :hover {
      border-bottom: 0px;
    }
    :active {
      border-bottom-color: transparent !important;
      border-bottom-style: none !important;
      border-bottom-width: 0 !important;
    }
  }
`;

const LargeNav = styled.div`
margin-left: auto;
  @media (max-width: 767.9px) {
    display: none;
  }
`;
const SmallNav = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: ${(props) => props.navcolor} !important;
  font-size: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledFontCancel = styled(FontAwesomeIcon)`
  z-index: 10;
  position: absolute;
  top: 0;
  color: white;
  margin-top: 18px;
  font-size: 24px;
  right: 28px;
  @media (min-width: 768px) {
    display: none;
  }
`;
