import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import Image1 from "../../assets/test-image1.png";
import LeftQuote from "../../assets/left-quote.jpg";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

function Testimonial() {
  return (
      
      <React.Fragment>
          <Wrapper>
          <Title>What People Say</Title>
          </Wrapper>
          
    <OwlCarousel items="1" className="owl-theme" loop autoplay dots={false}>
      <div className="item">
        <Wrapper>
          <TestimonialImage>
            <img src={Image1} alt="Green the Brain Testimonial" />
          </TestimonialImage>

          <TestimonialText>
            <img
              src={LeftQuote}
              className="left-quote"
              alt="Green the Brain Quote"
            />
            <Text>
              <p>
              Green the Brain institute, thank you 
              for your weekly educational posts that 
              have infact increased my interests in 
              topics of sustainability and renewable 
              energy. Your commitment and advocacy for 
              a Green environment has done so much to 
              influence my positive energy to playing my 
              part in attaining that safe environment 
              that we all desire. Finally for now, some 
              of us look forward to your weekly Ig tips 
              so in case you get tired of dropping those 
              hints, remember that some of us would be 
              starved. Thank you.
              </p>
              <p>- Ayodeji Faneye</p>
            </Text>
          </TestimonialText>
        </Wrapper>
      </div>
      <div className="item">
        <Wrapper>
          <TestimonialImage>
            <img src={Image1} alt="Green the Brain Testimonial" />
          </TestimonialImage>

          <TestimonialText>
            <img
              src={LeftQuote}
              className="left-quote"
              alt="Green the Brain Quote"
            />
            <Text>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam "Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam"Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam
              </p>
              <p>- Olayiwola Olamide</p>
            </Text>
          </TestimonialText>
        </Wrapper>
      </div>
      <div className="item">
        <Wrapper>
          <TestimonialImage>
            <img src={Image1} alt="Green the Brain Testimonial" />
          </TestimonialImage>

          <TestimonialText>
            <img
              src={LeftQuote}
              className="left-quote"
              alt="Green the Brain Quote"
            />
            <Text>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam "Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam"Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam
              </p>
              <p>- Olayiwola Olamide</p>
            </Text>
          </TestimonialText>
        </Wrapper>
      </div>
    </OwlCarousel>
    </React.Fragment>
  );
}

export default Testimonial;

const Title = styled.div `
font-size:36px;
color:black; 
font-weight:bold;
`

const Wrapper = styled.div`
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top:50px;
`;
const TestimonialImage = styled.div``;
const TestimonialText = styled.div`
  width: 480px;
  height: 300px;
  border: 9px solid #fbd50d;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  img {
    :nth-child(1) {
      position: absolute;
      width: 50px !important;
      margin-left: -50px;
      z-index: 2;
      border: 20px solid white;
      margin-top: -70px;
    }
  }
`;
const Text = styled.div`
  color: var(--mainGreen);
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  letter-spacing:0.2px;
  font-weight:300;
  width: 350px;
  text-align: justify;
  margin: auto;
  p {
    :nth-child(2) {
      margin-left: auto;
      text-align: right;
    }
  }
`;
