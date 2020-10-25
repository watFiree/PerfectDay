import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import { removeExercise } from '../redux/actions/removeExercise';
import DeleteButton from './DeleteButton';
import Text from './Text';
import Title from './Title';

const ExcerciseCard: React.FC<{ id: number; name: string; kcalBurnt: number }> = ({
  id,
  name,
  kcalBurnt,
}) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <View>
        <Title size={28}>{name}</Title>
        <Text size={18} style={{ color: 'gray' }}>
          {kcalBurnt} kcal
        </Text>
      </View>
      <DeleteButton onPress={() => dispatch(removeExercise(id))} />
    </Wrapper>
  );
};

export default ExcerciseCard;

const Wrapper = styled.View`
  width: 80%;
  min-height: 70px;
  height: 15%;
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid darkgray;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
