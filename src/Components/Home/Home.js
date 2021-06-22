import React from 'react';
import styled from 'styled-components';
import BannerImage from '../../assets/banner.jpg';
import BannerLine from '../../assets/bannerline.png';


function Home() {
    return (
        <React.Fragment>
            
                <Banner>
                <Container>
                    <BannerContent>
                        <Line/>
                        <Text>
                            <TextHeading>
                            Green the Brain Institute
                            </TextHeading>
                            <TextSubHeading>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </TextSubHeading>
                        </Text>
                    </BannerContent>
                    </Container>
                </Banner>
          
        </React.Fragment>
    )
}

export default Home

const Container = styled.div `
width:100%; 
@media(min-width:1200px){
    width:1200px;
    margin:auto;
}
`
const Line = styled.div `
background-image:url(${BannerLine});
backgroud-size:cover;
background-repeat:no-repeat;
width:364px;
margin-left:150px;
`
const Banner = styled.div `
background-image:url(${BannerImage});
height:600px;
background-size:cover;
display:flex;
justify-content:center;
`
const BannerContent = styled.div `
display:flex;
padding-top:150px;;
`
const Text = styled.div `
margin-left:-450px;
padding-top:75px;

`

const TextHeading = styled.div `
font-family: 'Nunito', sans-serif;
font-style: normal;
font-weight: 800;
font-size: 56px;
color:var(--mainYellow);
text-align:center;
width:1150px;
`
const TextSubHeading = styled.div `
font-family: 'Nunito', sans-serif;
font-weight: 800;
font-size: 26px;
line-height:33px;
text-align: center;
color:var(--mainYellow);
width:700px;
margin:auto;
`
