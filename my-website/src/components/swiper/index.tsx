// SwiperComponent.js

import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

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

const Slide = styled(SwiperSlide)<{ index: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 302px;
  height: 540px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #161617;
  color: #fff;
  font-size: 24px;
  margin: 24px;

  /* Conditional style based on slide index */
  ${({ index }) => index % 2 === 0 && 'margin-top: 100px;'}
`;

const SwiperComponent = () => {
  const handleSlideChange = () => {
    console.log('Slide change');
  };

  const handleSwiper = (swiper:any) => {
    console.log(swiper);
  };

  return (
    <>
      <CenteredText>Projects</CenteredText>
      <StyledSwiper
        spaceBetween={10} // Adjust spacing between slides
        slidesPerView={5}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
        // loop={true} // Enable the loop effect
        // loopedSlides={9} // Total number of slides including clones (7 + 1)
        // edgeSwipeDetection = {true}
      >
        <Slide key="slide-1" index={0}>Slide 1</Slide>
        <Slide key="slide-2" index={1}>Slide 2</Slide>
        <Slide key="slide-3" index={2}>Slide 3</Slide>
        <Slide key="slide-4" index={3}>Slide 4</Slide>
        <Slide key="slide-5" index={4}>Slide 5</Slide>
        <Slide key="slide-6" index={5}>Slide 6</Slide>
        <Slide key="slide-7" index={6}>Slide 7</Slide>
        <Slide key="slide-8" index={7}>Slide 8</Slide>
      </StyledSwiper>
    </>
  );
};

export default SwiperComponent;