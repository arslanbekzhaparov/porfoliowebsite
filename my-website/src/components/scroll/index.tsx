import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Background = styled.div<{ showBackground: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ showBackground }) =>
    showBackground ? 'rgba(255, 255, 255, 0.50)' : 'transparent'};
  box-shadow: ${({ showBackground }) =>
    showBackground ? '0px 5px 10px 0px rgba(0, 0, 0, 0.25)' : 'none'};
  backdrop-filter: ${({ showBackground }) =>
    showBackground ? 'blur(25px)' : 'none'};
  transition: background-color 0.5s, box-shadow 0.5s, backdrop-filter 0.5s;
  z-index: 1;
`;

const ScrollingBackground: React.FC = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackground(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Background showBackground={showBackground} />;
};

export default ScrollingBackground;