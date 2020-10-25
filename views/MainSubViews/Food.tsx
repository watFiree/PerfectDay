import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import Button from '../../components/Button';
import ProgressHeader from '../../components/HeaderWithProgress';
import Input from '../../components/Input';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import { setFoodIntake } from '../../redux/actions/setFoodIntake';
import { calculateFoodScore } from '../../utils/calculateFoodScore';

const Food = () => {
  const dispatch = useDispatch();
  const foodState = useSelector(({ data }) => data?.food);
  const kcalGoal = useSelector(({ user }) => user.kcalGoal);
  const totalKcalEaten =
    foodState.firstMeal +
    foodState.secondMeal +
    foodState.thirdMeal +
    foodState.fourthMeal +
    foodState.fifthMeal;
  console.log(foodState);
  return (
    <Layout>
      <ProgressHeader title="Jedzienie" progress={calculateFoodScore(totalKcalEaten, kcalGoal)} />
      <Text size={21}>
        W dzisiejszym dniu zjadles {totalKcalEaten} z {kcalGoal} kalorii
      </Text>
      <Text style={{ fontWeight: 'bold' }}>Pamiętaj o spożywaniu posiłku co 2-3 godziny !</Text>
      <Formik
        initialValues={{
          firstMeal: foodState.firstMeal || '',
          secondMeal: foodState.secondMeal || '',
          thirdMeal: foodState.thirdMeal || '',
          fourthMeal: foodState.fourthMeal || '',
          fifthMeal: foodState.fifthMeal || '',
        }}
        onSubmit={(values) => {
          const NumberedValues = {};
          Object.keys(values).forEach((meal) => {
            NumberedValues[meal] = Number(values[meal]);
          });
          console.log(NumberedValues);
          dispatch(setFoodIntake(NumberedValues));
          console.log(values);
        }}>
        {({ values, handleChange, handleSubmit }) => (
          <Wrapper>
            <Input
              value={values.firstMeal.toString()}
              placeholder="Śniadanie"
              onChangeText={handleChange('firstMeal')}
              keyboardType="numeric"
            />
            <Input
              value={values.secondMeal.toString()}
              placeholder="Drugie śniadanie"
              onChangeText={handleChange('secondMeal')}
              keyboardType="numeric"
            />
            <Input
              value={values.thirdMeal.toString()}
              placeholder="Obiad"
              onChangeText={handleChange('thirdMeal')}
              keyboardType="numeric"
            />
            <Input
              value={values.fourthMeal.toString()}
              placeholder="Podwieczorek"
              onChangeText={handleChange('fourthMeal')}
              keyboardType="numeric"
            />
            <Input
              value={values.fifthMeal.toString()}
              placeholder="Kolacja"
              onChangeText={handleChange('fifthMeal')}
              keyboardType="numeric"
            />
            <Button onPress={handleSubmit}>Zaktualizuj</Button>
          </Wrapper>
        )}
      </Formik>
    </Layout>
  );
};

export default Food;

const Wrapper = styled.View`
  border-top-width: 1px;
  border-top-color: darkgray;
  border-bottom-width: 1px;
  border-bottom-color: darkgray;
  width: 100%;
  flex: 0.8;
  align-items: center;
  justify-content: space-around;
`;
