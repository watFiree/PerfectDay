import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import { removeGoodDeed } from '../redux/actions/removeGoodDeed';
import DeleteButton from './DeleteButton';
import Title from './Title';

const GoodDeedCard: React.FC<{ id: number; text: string }> = ({ id, text }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Title>{text}</Title>
      <DeleteButton onPress={() => dispatch(removeGoodDeed(id))} />
    </Wrapper>
  );
};

export default GoodDeedCard;

const Wrapper = styled.View`
  width: 80%;
  min-height: 50px;
  height: 15%;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid darkgray;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
