import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import Title from './Title';

interface Props {
  id: number;
  title: string;
  term: string;
  status?: boolean;
}

const Task: React.FC<Props> = ({ id, title, term, status = false }, ...props) => {
  const navigation = useNavigation();
  return (
    <Wrapper {...props} onPress={() => navigation.navigate('TaskDetails', { taskId: id })}>
      <Title>{title}</Title>
      <Term>{term}</Term>
      <TaskStatus status={status}>
        <Text>{status ? 'Done' : 'In progress'} </Text>
      </TaskStatus>
    </Wrapper>
  );
};

export default Task;

const Wrapper = styled.TouchableOpacity`
  background-color: white;
  width: 75%;
  min-height: 100px;
  max-height: 130px;
  flex: 1;
  align-items: flex-start;
  justify-content: space-around;
  padding: 12px 16px;
  margin-bottom: 16px;
`;

const Term = styled.Text`
  font-size: 16px;
  color: darkgray;
  opacity: 0.8;
  font-weight: 600;
`;

const TaskStatus = styled.View<{ status: boolean }>`
  background-color: ${({ status }) => (status ? ' #56e756' : 'darkgray')};
  font-size: 18px;
  flex: 0.8;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  padding: 2px 5px;
`;
