import React from "react";
import styled from "styled-components";
import BannerImage from "../../assets/banner.jpg";
import SMBannerImage from "../../assets/small-banner.jpg";
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
import GalleryIcon from '../../assets/gallery.svg';
import Testimonial from "../snippets/Testimonial";
import VolunteerBanner from '../../assets/volunteer-banner.png';
import VolunteerBannerTwo from '../../assets/volunteer-2.png';
import VolunteerPerson from '../../assets/volunteer-person.jpg';

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
              <TextHeading>Green the Brain Institute </TextHeading>
              <TextSubHeading>
              (Think Sustainably)
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
            The Networking-Nature-Camp is one of the courses offered by Green the Brain Institute. It is a 3nights, 4 days environmental education course packed with unconventional activities with the aim of building young environmental enthusiasts from different backgrounds.
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
        <ImageText>
        <p>Through our Networking-Nature-Camp, the institute seeks to build a community of environmental enthusiasts through its camping experience</p>
        <p>The institute also provides exceptional tourism packages in different African countries.</p>
        </ImageText>
      </ImageSection>
      <Button iconImage={GalleryIcon} buttonText="View Gallery" backgroundColor="rgba(9, 98, 12, 0.78)"/>
        </Container>
      </ProjectSection>
      
      <Container>   
    <Testimonial/>
      </Container>
      <RegisterSection>
        <RegisterWrapper>
        <LeftRegister>
          <p>My name is Olayiwola Olayemi, I am a Product designer and i am also a volunteer 
            at Green the brain, You should volunteer also or donate to our cause.</p>
            <RegisterButton href="/" rel="noreferrer" target="_blank">
              Register
            </RegisterButton>
        </LeftRegister>
        <RightRegister>
<ImageBackground/>


<img src={VolunteerPerson}  alt="Volunteer Person"/>
        </RightRegister>
        </RegisterWrapper>
       
       
      </RegisterSection>
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
  @media(max-width:991px){
    img{
      display:none;
    }
  }
`;
const Banner = styled.div`
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  height: 600px;
  background-size: cover;
  justify-content: center;
  @media(max-width:991px){
    height:400px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  @media(max-width:576px){
    background-image: url(${SMBannerImage});
    height:600px;
    display:flex;
    align-items:center;
  }
`;
const BannerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 150px;
  @media(max-width:991px){
    padding-top:0px;
  }
`;
const Text = styled.div`
  margin-left: -300px;
  padding-top: 75px;
  @media(max-width:991px){
    margin-left:auto;
    margin-right:auto;
    padding-top:0px;
  }
`;

const TextHeading = styled.div`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 65px;
  color: var(--mainYellow);
  text-align: center;
  @media(max-width:1200px){
    font-size:45px;
  }
  @media(max-width:991px){
    font-size:36px;
  }
  @media(max-width:576px){
    font-size:30px;
  }
  @media(max-width:426px){
    font-size:22px;
  }
`;
const TextSubHeading = styled.div`
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 26px;
  line-height: 36px;
  text-align: center;
  color: var(--mainYellow);
  
  margin: auto;
  @media(max-width:991px){
    font-size:22px;
  }
  @media(max-width:576px){
    font-size:18px;
  }
  @media(max-width:426px){
    font-size:14px;
  }
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
  @media(max-width:768px){
    width:90%;
    margin:auto;
  }
  @media(max-width:426px){
    width:95%;
    margin:auto;
    font-size:16px;
    line-height:23px;
  }
`;
const SquareDesign = styled.div`
  position: absolute;
  padding-left: 50px;
  margin-top: -20px;
  @media(max-width:991px){
    display:none;
  }
`;
const ImageSec = styled.div`
  display: flex;
  justify-content: space-between;
  width: 750px;
  margin: auto;
  padding-top: 15px;
  @media (max-width:768px){
    flex-direction:column;
    width:400px;
    align-items:center;
    
  }
  @media(max-width:426px){
    width:350px;
    margin:auto;
  }
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
line-height:22px;
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
@media screen and (max-width: 1200px) and (min-width: 991px) {
  background-image:url(${BannerVolunteer});
}
@media(min-width:1200px){
  background-image:url(${VolunteerBannerTwo});

}
@media(max-width:991px){
  background-image:url(${VolunteerBannerTwo});
h5{
  width:90%;
  margin:auto;
  font-size:22px;
}
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
const ImageText = styled.div `
width:380px;
text-align:center;
padding-top:400px;
margin-left:auto;
margin-bottom:50px;
p{
  margin-bottom:0px;
  font-family: Noto Sans, san-serif;
  font-size:16px;
  font-weight:300;
  
}
`
const RegisterSection = styled.div `
margin-top:100px;
background-image:url(${VolunteerBanner});
height:400px;
background-size:cover;
background-repeat:no-repeat;
display:flex;
align-items:center;
`
const RegisterWrapper = styled.div `
width:850px;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
`
const LeftRegister = styled.div `
width:400px;
p{
  font-size:16px;
  line-height:24px;
 padding-bottom:20px;
color:var(--mainGreen);
}
`
const RightRegister = styled.div `
width:300px;
height:300px;
overflow:hidden;
img{
  width:300px;
  height:300px;
  position:absolute;
z-index:2;
}
`
const RegisterButton = styled.a`
background: linear-gradient(107.7deg, rgba(251, 213, 13, 0.9) -10.94%, rgba(9, 98, 12, 0.9) 114.07%);
padding:15px 30px;
color:white;
border-radius:5px;
text-decoration:none;
:hover{
  background: linear-gradient(121.06deg, rgba(244, 176, 25, 0.9) -4.18%, rgba(255, 0, 0, 0.9) 103.48%);
}
`
const ImageBackground = styled.div `
background: linear-gradient(180deg, #FF0000 0%, #FBD50D 100%);
width:300px;
height:300px;
position:absolute;
z-index:1;
margin-left:-8px;
margin-top:8px;
`
