import React from 'react';
import styled from 'styled-components/native';

import Text from './Text';

interface Props {
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
}

const Wrapper = styled.TouchableOpacity<Props>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '45px'};
  background-color: ${({ bgColor }) => bgColor || '#00BFFF'};
  color: ${({ color }) => color || 'white'};
  padding: 6px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
`;

const Button: React.FC<Props & { onPress?: () => void }> = ({
  children,
  onPress,
  width,
  height,
  bgColor,
  color,
}) => (
  <Wrapper onPress={onPress} width={width} height={height} bgColor={bgColor} color={color}>
    <Text>{children}</Text>
  </Wrapper>
);

export default Button;
