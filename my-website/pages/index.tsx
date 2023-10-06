import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled, {keyframes } from 'styled-components';
import WelcomeDIV from '@components/wlcm';
import CultureDiv from '@components/culture'
// import SwiperComponent from '@components/swiper';
import ContactSec from '@components/contact';
import ProjectSec from '@components/projects';
import FishAnimation from '@components/fishy';

import React from 'react';
import bgpSpline from '@images/SplinePlaceholder.png';
import Spline from '@splinetool/react-spline';

const Container = styled.div`
  background-color: black;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const TextContainer = styled.div`
  margin-top: 20px;
  color: #FFF;
  text-align: left;
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 767px) {
    text-align: center;
    margin-left: 0;
  }

  @media (min-width: 768px) {
    margin-left: 120px;
  }
`;

const decreaseHeightAnimation = keyframes`
  0% {
    height: 400px;
  }
  100% {
    height: 200px;
  }
`;

const SplineDiv = styled.div`
  width: 1300px;
  height: 400px;
  border-radius: 300px;
  overflow: hidden;
  background-color: #grey;
  animation: ${decreaseHeightAnimation} 0.3s ease-in 15s forwards; /* Apply the animation with a 17s delay */

  @media (max-width: 450px) {
    width: 400px;
    height: 200px; /* Make it a square shape for mobile screens */
  }
`;

const ContactDiv = styled.div`
  width: 100%;
  height: 350px;
  background-color: #161617;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%; /* Set width to 100% to take up the entire SplineDiv width */
  height: 100%; /* Set height to 100% to take up the entire SplineDiv height */
  `;




const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Arslan&apos;s Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!"/>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://www.arslanbekzhaparov.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Arslanbek Zhaparov"/>
        <meta property="og:description" content="Welcome to my portfolio!"/>
        <meta property="og:image" content="https://github.com/arslanbekzhaparov/arslanbekzhaparov.com/blob/main/public/images/preview.png?raw=true"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="portfoliowebsite-beryl.vercel.app"/>
        <meta property="twitter:url" content="https://portfoliowebsite-beryl.vercel.app/"/>
        <meta name="twitter:title" content="Arslanbek Zhaparov"/>
        <meta name="twitter:description" content="Welcome to my portfolio!"/>
        <meta name="twitter:image" content="https://github.com/arslanbekzhaparov/arslanbekzhaparov.com/blob/main/public/images/preview.png?raw=true"/>
      </Head>
      <WelcomeDIV></WelcomeDIV>
      <CenteredContent>
        
        <SplineDiv>
        <ImageContainer>
          <Spline
            scene="https://draft.spline.design/USv93if4U0-rn4B6/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          </ImageContainer>
          
        </SplineDiv>
      </CenteredContent>
      {/* <CultureDiv></CultureDiv> */}
      <ProjectSec></ProjectSec>
      <ContactSec></ContactSec>
    </Container>
  );
};

export default Home;