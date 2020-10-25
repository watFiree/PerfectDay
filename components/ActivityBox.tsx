import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

import ProgressBar from './ProgressBar';
import Text from './Text';
import Title from './Title';

const ActivityBox: React.FC<{
  title: string;
  progress?: number;
  icon?: string;
  onPress: () => void;
}> = ({ title, progress = 0, icon = '', onPress }, ...props) => {
  return (
    <Wrapper onPress={onPress} {...props}>
      <Title>{title}</Title>
      {icon ? <Icon name={icon} size={36} color="#000000" /> : null}
      <Text size={21}>{progress}/100 %</Text>
      <ProgressBar progress={progress} />
    </Wrapper>
  );
};

const Wrapper = styled.TouchableOpacity`
  min-width: 185px;
  min-height: 185px;
  max-width: 240px;
  max-height: 240px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export default ActivityBox;
