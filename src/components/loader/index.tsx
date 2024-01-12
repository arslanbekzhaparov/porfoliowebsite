// PageLoader.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 1000;
`;

const SnurraSvg = styled.svg`
  filter: url(#gegga);
`;

const HalvanPath = styled.path`
  animation: ${loaderAnimation} 10s infinite linear;
  stroke-dasharray: 180 800;
  fill: none;
  stroke: url(#gradient);
  stroke-width: 23;
  stroke-linecap: round;
`;

const StreckenPath = styled.path`
  animation: ${loaderAnimation} 3s infinite linear;
  stroke-dasharray: 26 54;
  fill: none;
  stroke: url(#gradient);
  stroke-width: 23;
  stroke-linecap: round;
`;

const SkuggaSvg = styled.svg`
  filter: blur(5px);
  opacity: 0.3;
  position: absolute;
  transform: translate(3px, 3px);
`;

const PageLoader = () => {
  return (
    <LoaderContainer>
      <SnurraSvg className="snurra" width="200" height="200" viewBox="0 0 200 200">
        <HalvanPath
          d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
        />
        <StreckenPath
          d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
        />
      </SnurraSvg>
      <SkuggaSvg className="skugga" width="200" height="200" viewBox="0 0 200 200">
        <path
          className="halvan"
          d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
        />
        <circle className="strecken" cx="100" cy="100" r="64" />
      </SkuggaSvg>
    </LoaderContainer>
  );
};

export default PageLoader;