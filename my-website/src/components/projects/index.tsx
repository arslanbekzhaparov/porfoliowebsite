import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import SwiperComponent from '@components/slider'; // Import your SwiperComponent

import Card1Img from '@images/Card1_image.svg';
import Card2Img from '@images/Card2_image.svg';
import Card3Img from '@images/Card3_image.svg';
import Card4Img from '@images/Card4_image.svg';
import Card5Img from '@images/Card5_image.svg';

const Card = styled.div`
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CenteredText = styled.div`
  width: 100%;
  flex-shrink: 0;
  background: #000;
  padding-top: 20px;
  color: #fff;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: normal;
`;


const Projects = () => {
  return (
    <>
      <CenteredText>Projects</CenteredText>
      <SwiperComponent>
        <Card>
        <CardImage>
              <Image
                src={Card1Img}
                alt={`Tennis Robot`}
                fill
                style={{ objectFit: "cover" }}
              />
            </CardImage>
        </Card>
        <Card>
        <CardImage>
              <Image
                src={Card2Img}
                alt={`Tennis Robot`}
                fill
                style={{ objectFit: "cover" }}
              />
            </CardImage>
        </Card>
        <Card>
        <CardImage>
              <Image
                src={Card3Img}
                alt={`Tennis Robot`}
                fill
                style={{ objectFit: "cover" }}
              />
            </CardImage>
        </Card>
        <Card>
        <CardImage>
              <Image
                src={Card4Img}
                alt={`Tennis Robot`}
                fill
                style={{ objectFit: "cover" }}
              />
            </CardImage>
        </Card>
        <Card>
        <CardImage>
              <Image
                src={Card5Img}
                alt={`Tennis Robot`}
                fill
                style={{ objectFit: "cover" }}
              />
            </CardImage>
        </Card>
      </SwiperComponent>
    </>
  );
};

export default Projects;