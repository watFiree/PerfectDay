import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import CreateTaskForm from '../components/CreateTaskForm';
import Layout from '../components/Layout';
import Task from '../components/Task';
import Text from '../components/Text';
import Title from '../components/Title';
import TaskDetailsView from './TaskDetailsView';

const Tasks = () => {
  const state = useSelector(({ tasks }) => tasks);
  const [isFormOpened, setIsFormOpened] = React.useState(false);
  const closeFormFunc = () => setIsFormOpened(false);
  return (
    <Layout>
      <Header>
        <Title size={48}>Zadania</Title>
        <AddTaskButton onPress={() => setIsFormOpened(true)}>
          <Icon name="plus" size={35} color="#0b3061" />
          <Text>Utwórz zadanie</Text>
        </AddTaskButton>
      </Header>
      <ScrollView style={{ marginTop: 32, width: '100%' }}>
        <TasksWrapper>
          {state?.data.map((task) => (
            <Task
              id={task.id}
              title={task.title}
              term="12 Jun 2020 - 01 Aug 2020"
              status={task.status}
            />
          ))}
        </TasksWrapper>
      </ScrollView>
      {isFormOpened ? <CreateTaskForm closeFormFunc={() => setIsFormOpened(false)} /> : null}
    </Layout>
  );
};

const TaskStack = createStackNavigator();

const TasksNavigation = () => (
  <TaskStack.Navigator>
    <TaskStack.Screen
      name="Tasks"
      component={Tasks}
      options={{
        headerShown: false,
      }}
    />
    <TaskStack.Screen
      name="TaskDetails"
      component={TaskDetailsView}
      options={{ headerTitle: 'Task Details' }}
      initialParams={{ taskId: null }}
    />
  </TaskStack.Navigator>
);

export default TasksNavigation;

const Header = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: center;
  margin: 16px 0 64px 0;
  min-height: 10%;
  max-height: 15%;
`;

const TasksWrapper = styled.View`
  flex: 0.6;
  width: 100%;
  align-items: center;
`;

const AddTaskButton = styled.TouchableOpacity`
  border: 3px solid black;
  border-radius: 6px;
  padding: 32px 0;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
