import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import SwiperComponent from '@components/swipe'; // Update the import path

const Background = styled.div<{ showbackground: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: background-color 0.5s, box-shadow 0.5s, backdrop-filter 0.5s;

  ${({ showbackground }) =>
    showbackground
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

const Text = styled.h1<{ showtext: boolean }>`
  font-family: 'Open Sans', sans-serif;
  font-size: 36px;
  text-align: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  transition: color 0.5s;

  ${({ showtext }) =>
    showtext &&
    css`
      color: #d8d8d8;
    `}
`;

const TextProj = styled.h2<{ showtext: boolean }>`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  transition: color 0.5s;

  ${({ showtext }) =>
    showtext &&
    css`
      color: #d8d8d8;
    `}
`;

const WhiteDiv = styled.div<{ showdiv: boolean }>`
  position: absolute;
  top: 50%; /* Position after TextProj component */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 25rem;
  background-color: transperent;
  opacity: 0;
  transition: opacity 0.5s;

  ${({ showdiv }) =>
    showdiv &&
    css`
      opacity: 1;
    `}
`;

const ScrollingBackground: React.FC = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackground(scrollPosition > 0);
      setShowText(scrollPosition > 0);
      setShowDiv(scrollPosition > 0); // Show the div on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Background showbackground={showBackground}>
      <Text showtext={showText}>Arslanbek Zhaparov</Text>
      <TextProj showtext={showText}>Projects</TextProj>
      <WhiteDiv showdiv={showDiv}>
        {/* <SwiperComponent /> */}
      </WhiteDiv> {/* Show the WhiteDiv on scroll */}
    </Background>
  );
};

export default ScrollingBackground;