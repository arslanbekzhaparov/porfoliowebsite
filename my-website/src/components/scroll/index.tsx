import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Background = styled.div<{ showBackground: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.5s, box-shadow 0.5s, backdrop-filter 0.5s;

  ${({ showBackground }) =>
    showBackground
      ? css`
        background: rgba(0, 0, 0, 0.75);
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(25px);
        `
      : css`
          background: transparent;
          box-shadow: none;
          backdrop-filter: none;
        `}
`;

const Text = styled.h1<{ showText: boolean }>`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  transition: color 0.5s;

  ${({ showText }) =>
    showText &&
    css`
      color: #ffffff;
    `}
`;

const ScrollingBackground: React.FC = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackground(scrollPosition > 0);
      setShowText(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Background showBackground={showBackground}>
      <Text showText={showText}>Sample Text</Text>
    </Background>
  );
};

export default ScrollingBackground;