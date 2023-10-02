import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const SwiperWrapper = styled(Swiper)`
  width: 100%;
  margin-top: 20px;
  background: #000;
`;

interface SwiperComponentProps {
  children: ReactNode;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ children }) => {
  return (
    <SwiperWrapper
    //   spaceBetween={10} // Space between slides
      navigation // Add navigation arrows
      loop // Infinite loop
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};

export default SwiperComponent;