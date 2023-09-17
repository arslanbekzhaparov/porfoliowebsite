// SwiperComponent.js

import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Image from 'next/image'; // Import the Next.js Image component
import { StyleSheetManager } from 'styled-components';

import Card1Img from '@images/Card1_image.svg'
import Card2Img from '@images/Card2_image.svg'
import Card3Img from '@images/Card3_image.svg'
import Card4Img from '@images/Card4_image.svg'
import Card5Img from '@images/Card5_image.svg'


const StyledSwiper = styled(Swiper)`
  width: 100%;
  background: #000;
`;

const CenteredText = styled.div`
  width: 100%;
  flex-shrink: 0;
  background: #000;
  padding-top: 20px;

  color: #FFF;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: normal;
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 302px;
  height: 540px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #161617;
  color: #fff;
  font-size: 24px;
  margin: 24px;
`;

const CardImage = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
`;

const CardText = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const GithubButton = styled.button`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none; /* Remove default anchor text decoration */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonImage = styled.div`
  // width: 100%;
  // height: 70%;
  overflow: hidden;
`;

const SwiperComponent = () => {
  const handleSlideChange = () => {
    console.log('Slide change');
  };

  const handleSwiper = (swiper:any) => {
    console.log(swiper);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => !['spaceBetween', 'slidesPerView', 'loopedSlides', 'edgeSwipeDetection'].includes(prop)}>
    <>
      <CenteredText>Projects</CenteredText>
      <StyledSwiper
        spaceBetween = {10}
        slidesPerView = {5}
        onSlideChange = {handleSlideChange}
        onSwiper = {handleSwiper}
        edgeSwipeDetection = {true}
      >
        <Slide key="slide-1">
          <CardImage>
              <Image
                src={Card1Img}
                alt={`Tennis Robot`}
                fill
                style={{objectFit: "cover"}}
              />
            </CardImage>
            {/* <GithubButton backgroundColor ={"#628300"}></GithubButton> */}
            </Slide>
        <Slide key="slide-2"><CardImage>
              <Image
                src={Card2Img}
                alt={`Tennis Robot`}
                fill
                style={{objectFit: "cover"}}
              />
            </CardImage></Slide>
        <Slide key="slide-3"><CardImage>
              <Image
                src={Card3Img}
                alt={`Tennis Robot`}
                fill
                style={{objectFit: "cover"}}
              />
            </CardImage></Slide>
        {/* <Slide key="slide-4" index={3}><CardImage>
              <Image
                src={Card4Img}
                alt={`Tennis Robot`}
                fill
                style={{objectFit: "cover"}}
              />
            </CardImage></Slide>
        <Slide key="slide-5" index={4}
        <CardImage>
              <Image
                src={Card5Img}
                alt={`Tennis Robot`}
                fill
                style={{objectFit: "cover"}}
              />
            </CardImage>
            </Slide> */}
      </StyledSwiper>
    </>
    </StyleSheetManager>
  );
};

export default SwiperComponent;