import { Formik } from 'formik';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import CloseButton from '../../components/CloseButton';
import ExcerciseCard from '../../components/ExcerciseCard';
import ProgressHeader from '../../components/HeaderWithProgress';
import Input from '../../components/Input';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import Title from '../../components/Title';
import { addExercise } from '../../redux/actions/addExercise';
import { calculateSportScore } from '../../utils/calculateSportScore';

const PhysicalHealth = () => {
  const [isFormOpened, setIsFormOpened] = React.useState(false);
  const foodState = useSelector(({ data }) => data.food);
  console.log(foodState);
  const state = useSelector(({ data }) => data.physical);
  console.log(state);
  const totalKcalEaten =
    foodState.firstMeal +
    foodState.secondMeal +
    foodState.thirdMeal +
    foodState.fourthMeal +
    foodState.fifthMeal;
  const totalKcalBurnt = state.exercises.reduce((acc, curr) => acc + curr.kcalBurnt, 0);
  console.log(totalKcalBurnt);
  return (
    <Layout>
      <ProgressHeader
        title="Zdrowie fizyczne"
        progress={calculateSportScore(totalKcalBurnt, totalKcalEaten)}
      />
      <Text>W dzisiejszym dniu spaliles 0 kalorii</Text>
      <Exercises>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          {state.exercises.map((exercise) => (
            <ExcerciseCard id={exercise.id} name={exercise.name} kcalBurnt={exercise.kcalBurnt} />
          ))}
        </ScrollView>
        <Button onPress={() => setIsFormOpened(true)}>Dodaj ćwiczenie</Button>
      </Exercises>
      {isFormOpened ? <AddExerciseForm closeFunction={() => setIsFormOpened(false)} /> : null}
    </Layout>
  );
};

export default PhysicalHealth;

const AddExerciseForm: React.FC<{ closeFunction: () => void }> = ({ closeFunction }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', kcalBurnt: '' }}
      onSubmit={(values) => {
        dispatch(addExercise(values.name, Number(values.kcalBurnt)));
        closeFunction();
      }}>
      {({ values, handleChange, handleSubmit }) => (
        <Form>
          <Title>Dodaj ćwiczenie</Title>
          <CloseButton onPress={closeFunction} />
          <Input
            value={values.name}
            placeholder="Nazwa ćwicznia"
            onChangeText={handleChange('name')}
          />
          <Input
            values={values.kcalBurnt}
            placeholder="Spalone kalorie"
            keyboardType="numeric"
            onChangeText={handleChange('kcalBurnt')}
          />
          <Button onPress={handleSubmit} width="40%">
            Dodaj
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const Form = styled.View`
  background-color: white;
  padding: 8px;
  width: 90%;
  min-height: 200px;
  height: 40%;
  position: absolute;
  top: 30%;
  align-items: center;
  border: 1px solid darkgray;
  border-radius: 8px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Exercises = styled.View`
  border-top-width: 1px;
  border-top-color: darkgray;
  border-bottom-width: 1px;
  border-bottom-color: darkgray;
  width: 100%;
  padding: 8px 0;
  flex: 0.6;
  margin-bottom: 16px;
`;
