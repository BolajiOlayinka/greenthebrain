import React, { useState,useLayoutEffect } from "react";
import styled from "styled-components";
import Logo from "../src/assets/Logo.svg";
import donatelove from "../src/assets/love.svg";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
//   const [fixed, setFixed] = useState("initial");
  const [showIcon, setShowIcon] = useState(true);
  const [showItem, setShowItem] = useState(false);
  const [size, setSize] = useState(0+`px`);

  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth + 'px');
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
const width= useWindowSize();
if (width >= 991+ 'px'){
setShowIcon(true);
}
console.log(width);
  const toggle = (e) => {
    setShowItem(!showItem, e);
    setShowIcon(!showIcon, e);
  };
  return (
    
    <React.Fragment>
      <Container>
        <HeaderWrapper>
          <LeftHeader>
            <img src={Logo} alt="Green the brain Institute" />
          </LeftHeader>
          <RightHeader>
            {(!showItem) && (
              <React.Fragment>
                <NavLink>
                  <Linker to="/">Home</Linker>
                </NavLink>
                <NavLink>
                  <Linker to="/">About Us</Linker>
                </NavLink>
                <NavLink>
                  <Linker to="/">Projects</Linker>
                </NavLink>
                <NavLink>
                  <Linker to="/">Volunteers</Linker>
                </NavLink>
                <NavLink>
                  <Linker to="/">Blog</Linker>
                </NavLink>
                <NavLink>
                  <Linker to="/">Donate</Linker>
                  <img
                    src={donatelove}
                    className="donatelove"
                    alt="donate love"
                  />
                </NavLink>
              </React.Fragment>
            )}
            <div onClick={toggle} style={{ marginRight: "38px" }}>
              {showIcon ? (
                <StyledFontAwesome icon={faBars} />
              ) : (
                <StyledFontCancel icon={faTimesCircle} />
              )}
            </div>
          </RightHeader>
        </HeaderWrapper>
      </Container>
    </React.Fragment>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;
const HeaderWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const LeftHeader = styled.div`
  margin-right: auto;
  margin-left: 68px;
  img {
    width: 200px;
    height: 60px;
  }
`;

const RightHeader = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 68px;
`;
const Linker = styled(Link)`
  color: var(--mainGreen);
  text-decoration: none;
  :hover {
    color: red;
  }
`;
const NavLink = styled.div`
  font-size: 12px;
  font-weight: semi-bold;
  margin-left: 17px;
  margin-right: 17px;
  .donatelove {
    width: 12px;
    height: 12px;
    margin-left: -5px;
    margin-top: -5px;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: white;
  font-size: 20px;

  @media (min-width: 768.1px) {
    display: none;
  }
`;
const StyledFontCancel = styled(FontAwesomeIcon)`
  z-index: 2;
  position: absolute;
  top: 0;
  color: white;
  margin-top: 30px;
  margin-left: -8px;
  font-size: 24px;
`;
