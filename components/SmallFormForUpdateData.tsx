import React from 'react';
import styled from 'styled-components/native';

import Button from './Button';
import CloseButton from './CloseButton';
import Input from './Input';
import Title from './Title';

interface Props {
  title: string;
  closeFunction: (args?: any) => void;
  stateValue: string | number | boolean;
  setStateValue: (args?: any) => void;
  submitFunction: (args?: any) => void;
}

const Form: React.FC<Props> = ({
  title,
  closeFunction,
  stateValue,
  setStateValue,
  submitFunction,
}) => (
  <Wrapper>
    <CloseButton size={25} onPress={closeFunction} />
    <Title>{title}</Title>
    <Input value={stateValue} onChangeText={setStateValue} />
    <Button
      onPress={() => {
        submitFunction();
        closeFunction();
      }}>
      Zaktualizuj
    </Button>
  </Wrapper>
);

export default Form;

const Wrapper = styled.View`
  background-color: white;
  padding: 8px;
  width: 80%;
  min-height: 150px;
  height: 30%;
  position: absolute;
  top: 40%;
  align-items: center;
  border: 1px solid darkgray;
  border-radius: 8px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;
