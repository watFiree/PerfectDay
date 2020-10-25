import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import Button from '../components/Button';
import Layout from '../components/Layout';
import Text from '../components/Text';
import Title from '../components/Title';
import { removeTask } from '../redux/actions/removeTask';
import { setTaskStatus } from '../redux/actions/setTaskStatus';

const TaskDetailsView = () => {
  const { params } = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const state = useSelector(({ tasks }) => tasks.data.find((task) => task.id === params?.taskId));
  console.log(state);
  return (
    <Layout>
      <Title>{state?.title}</Title>
      <Text>{new Date().toISOString()}</Text>
      <Divider />
      <Text>{state?.description}</Text>
      <Button onPress={() => dispatch(setTaskStatus(state?.id, !state?.status))}>
        {state?.status ? 'W trakcie' : 'Wykonano'}
      </Button>

      <Button>Edit</Button>
      <Button
        onPress={() => {
          navigation.goBack();
          dispatch(removeTask(state.id));
        }}>
        Remove
      </Button>
    </Layout>
  );
};

export default TaskDetailsView;

const Divider = styled.View`
  height: 2px;
  width: 100%;
  background-color: darkgray;
`;
