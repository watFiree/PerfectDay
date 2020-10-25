import React from 'react';
import styled from 'styled-components/native';

interface Props {
  progress: number;
  height?: number;
}

const ProgressBar: React.FC<Props> = ({ progress, height = 0 }) => {
  return (
    <BarComponent height={height}>
      <ProgressComponent progress={progress} />
    </BarComponent>
  );
};

const BarComponent = styled.View<{ height: number }>`
  min-width: 50%;
  width: 80%;
  height: ${({ height }) => (height ? `${height}%` : '5%')};
  border: 1px solid darkgray;
  border-radius: 48px;
`;

const ProgressComponent = styled.View<Props>`
  width: ${({ progress }) => (progress ? `${progress > 100 ? 100 : progress}%` : '0%')};
  height: 100%;
  background-color: blue;
  border-radius: 16px;
`;

export default ProgressBar;
