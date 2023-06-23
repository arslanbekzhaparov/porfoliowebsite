import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import styled from 'styled-components';

const BackgroundCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scrolling */
`;

interface SplineBackgroundProps {
  splineSceneUrl: string;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ splineSceneUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load(splineSceneUrl);
    }
  }, [splineSceneUrl]);

  return <BackgroundCanvas ref={canvasRef} />;
};

export default SplineBackground;