import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const CloseButton: React.FC<{ onPress?: any; size?: number; color?: string }> = ({
  onPress,
  size = 30,
  color = '#646262',
}) => (
  <CloseIcon onPress={onPress}>
    <Icon name="close" size={size} color={color} />
  </CloseIcon>
);

export default CloseButton;

const CloseIcon = styled.TouchableOpacity`
  position: absolute;
  right: 5px;
  top: 0px;
`;
