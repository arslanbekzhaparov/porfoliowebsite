import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bgpSpline from '@images/SplinePlaceholder.png';
import Spline from '@splinetool/react-spline';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
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

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const SplineDiv = styled.div`
  width: 1300px;
  height: 400px;
  border-radius: 300px;
  overflow: hidden;
  background-color: #grey;

  @media (max-width: 450px) {
    width: 400px;
    height: 350px; /* Make it a square shape for mobile screens */
  }
`;

const ImageContainer = styled.div`
  width: 100%; /* Set width to 100% to take up the entire SplineDiv width */
  height: 100%; /* Set height to 100% to take up the entire SplineDiv height */
`;

function WelcomeDIV() {
  return (
    <StyledDiv>
      <TextContainer>Welcome to my portfolio</TextContainer>
      <CenteredContent>
        <SplineDiv>
        <ImageContainer>
        <Image
              src={bgpSpline}
              alt="Spline Placeholder"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          {/* <Spline
            scene="https://prod.spline.design/1pLL8hQ2rWkXmjMn/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          /> */}
          </ImageContainer>
        </SplineDiv>
      </CenteredContent>
    </StyledDiv>
  );
}
export default WelcomeDIV;