import React from "react";
import styled from "styled-components";
import BannerImage from "../../assets/banner.jpg";
import BannerLine from "../../assets/bannerline.png";
import Title from "../snippets/TitleHead";
import Button from "../snippets/LearnButton.js";
import GreenSquare from "../../assets/green-halfsquare.png";
import imageone from "../../assets/img-1.png";
import imagetwo from "../../assets/img-2.png";
import imagethree from "../../assets/img-3.png";
import imagefour from "../../assets/img-4.png";
import Learn from '../../assets/Learn.svg';
import BannerVolunteer from '../../assets/volunteer.jpg';
import ArrowRight from '../../assets/arrow-right.svg';
import ProjectImageOne from '../../assets/project-image1.png';
import ProjectImageTwo from '../../assets/project-image2.png';
import ProjectImageThree from '../../assets/project-image3.png';
import ProjectImageFour from '../../assets/project-image4.png';


function Home() {
  return (
    <React.Fragment>
      <Banner>
        <Container>
          <BannerContent>
            <Line>
              <img src={BannerLine} alt="Yellow Curve" />
            </Line>
            <Text>
              <TextHeading>Green the Brain Institute</TextHeading>
              <TextSubHeading>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </TextSubHeading>
            </Text>
          </BannerContent>
        </Container>
      </Banner>
      <Container>
        <Title text="About Us" />
        <SquareDesign>
          <img src={GreenSquare} alt="" />
        </SquareDesign>
        <AboutText>
          Green the Brain institute is an environmental education institute that
          employs unconventional activities to encourage, train and educate
          young people about the environment and the need to protect it.
        </AboutText>
        <ImageSec>
          <div>
            <OverlapImage>
              <img src={imageone} alt="Green the brain" />
              <img src={imagetwo} alt="Green the brain" />
            </OverlapImage>
            <ImagesText>
            Through our Networking-Nature-Camp, 
            the institute seeks to build a community of 
            environmental enthusiasts through its camping 
            experience
            </ImagesText>
          </div>
          <div>
            <OverlapImage>
              <img src={imagethree} alt="Green the brain" />
              <img src={imagefour} alt="Green the brain" />
            </OverlapImage>
            <ImagesText>
            The institute also provides exceptional tourism 
            packages in different African countries. 
            </ImagesText>
          </div>
        </ImageSec>
        <Button iconImage={Learn} buttonText="Learn More" backgroundColor="rgba(9, 98, 12, 0.78)"/>
      </Container>
      <VolunteerSection>
        <div><h5>Find out how to volunteer and give back to the environment</h5>
        <img src={ArrowRight} alt="Green the Brain"/>
        </div>
      </VolunteerSection>
      <ProjectSection>
        <Container>
        <Title text="Projects"/>
        <SquareDesign>
          <img src={GreenSquare} alt="" />
        </SquareDesign>
        <AboutText>
          Green the Brain institute is an environmental education institute that
          employs unconventional activities to encourage, train and educate
          young people about the environment and the need to protect it.
        </AboutText>
      <ImageSection>
      <img src={ProjectImageOne} className="green the brain project image 1" alt="Green the brain"/>
        <img src={ProjectImageTwo} className="green the brain project image 2" alt="Green the brain"/>
        <img src={ProjectImageThree} className="green the brain project image 3" alt="Green the brain"/>
        <img src={ProjectImageFour} className="green the brain project image 4" alt="Green the brain"/>
      </ImageSection>
        
        </Container>
      </ProjectSection>
    </React.Fragment>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;
const Line = styled.div`
  img {
    width: 364px;
  }
`;
const Banner = styled.div`
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  height: 600px;
  background-size: cover;
  justify-content: center;
`;
const BannerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 150px;
`;
const Text = styled.div`
  margin-left: -300px;
  padding-top: 75px;
`;

const TextHeading = styled.div`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 75px;
  color: var(--mainYellow);
  text-align: center;
`;
const TextSubHeading = styled.div`
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 26px;
  line-height: 33px;
  text-align: center;
  color: var(--mainYellow);
  width: 700px;
  margin: auto;
`;

// About Us Section
const AboutText = styled.div`
font-family: Noto Sans, san-serif;
  width: 651px;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin: auto;
  color: #333c33;
`;
const SquareDesign = styled.div`
  position: absolute;
  padding-left: 50px;
  margin-top: -20px;
`;
const ImageSec = styled.div`
  display: flex;
  justify-content: space-between;
  width: 750px;
  margin: auto;
  padding-top: 15px;
`;
const OverlapImage = styled.div`
  img {
    width: 207px;
    :first-child {
      position: relative;
      z-index: 2;
    }
    :last-child {
      position: relative;
      z-index: 1;
      margin-left: -70px;
    }
  }
`;
const ImagesText = styled.p`
font-family: Noto Sans, san-serif;
font-size:16px;
text-align:center;
width:350px;
`;

// Volunteer Section
const VolunteerSection = styled.div `
background-image:url(${BannerVolunteer});
background-size:cover;
height:500px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
text-align:center;
h5{
    font-family: Nunito;
    font-size: 28px;
line-height: 35px;
width:600px;
text-align:center;
color:white;
padding-top:80px;
}
img{
    position:absolute;
    width:20px;
   padding-top:85px;
    
}
`
// Projects Section
const ProjectSection = styled.div `
padding-top:50px;

}
`
const ImageSection = styled.div`
width:800px;
margin:auto;
img{
  :nth-child(1) {
    width:400px;
    position:absolute;
    z-index:4;
    padding-top:100px;
  }
  :nth-child(2) {
    width:320px;
    position:absolute;
    z-index:3;
    padding-left:350px;
    padding-top:60px

  }
  :nth-child(3) {
    width:213px;
    position:absolute;
    z-index:2;
   padding-left:630px;
    padding-top:40px;
  }
  :nth-child(4) {
    width:163px;
    position:absolute;
    z-index:1;
    padding-left:630px;
    padding-top:220px;
  }
}
`