import React from 'react';
import styled from 'styled-components/native';

import ProgressBar from './ProgressBar';
import Text from './Text';
import Title from './Title';

const HeaderWithProgress: React.FC<{ title: string; progress: number; height?: number }> = ({
  title,
  progress,
  height = 10,
}) => {
  return (
    <Header height={height}>
      <TitleWithPadding>{title}</TitleWithPadding>
      <Text>Twój dzisiejszy wynik:</Text>
      <ProgressBar height={height} progress={progress} />
      <Text size={21}>{progress} / 100%</Text>
    </Header>
  );
};

export default HeaderWithProgress;

const Header = styled.View<{ height?: number }>`
  width: 100%;
  flex: 0.4;
  margin-bottom: 50px;
  align-items: center;
  min-height: ${({ height }) => (height ? `${height}%` : '10%')};
`;

const TitleWithPadding = styled(Title)`
  font-size: 48px;
  padding: 16px 0;
  text-align: center;
`;
