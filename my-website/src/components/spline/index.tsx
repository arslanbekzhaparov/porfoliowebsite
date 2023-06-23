import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import styled from 'styled-components';

const BackgroundCanvas = styled.canvas`
  position: fixed;
  width: 100%;
  height: 100%;
`;

interface SplineBackgroundProps {
  splineSceneUrl: string;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ splineSceneUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let app: Application | null = null;

    const handleResize = () => {
      if (app && canvasRef.current) {
        app.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      }
    };

    if (canvasRef.current) {
      app = new Application(canvasRef.current);
      app.load(splineSceneUrl);
      handleResize(); // Initial sizing

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        app = null;
      };
    }
  }, [splineSceneUrl]);

  return <BackgroundCanvas ref={canvasRef} />;
};

export default SplineBackground;