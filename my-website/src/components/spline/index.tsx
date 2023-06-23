import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import styled from 'styled-components';

const BackgroundCanvas = styled.canvas`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const SplineBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/1pLL8hQ2rWkXmjMn/scene.splinecode');
    }
  }, []);

  return <BackgroundCanvas ref={canvasRef} />;
};

export default SplineBackground;