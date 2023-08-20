import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Import Image component from next/image

import bgpSpline from '@images/SplinePlaceholder.png';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  padding-left: 120px;
  margin-top: 20px;
  color: #FFF;
  text-align: left;
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: normal;
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
  overflow: hidden; /* Clip the overflowing image */
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
        </SplineDiv>
      </CenteredContent>
    </StyledDiv>
  );
}

export default WelcomeDIV;