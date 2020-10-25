import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import ActivityBox from '../components/ActivityBox';
import ProgressHeader from '../components/HeaderWithProgress';
import Layout from '../components/Layout';
import { calculateFoodScore } from '../utils/calculateFoodScore';
import { calculateOverallScore } from '../utils/calculateOverallScore';
import { calculateSanityScore } from '../utils/calculateSanityScore';
import { calculateSleepScore } from '../utils/calculateSleepScore';
import { calculateSportScore } from '../utils/calculateSportScore';
import Food from './MainSubViews/Food';
import PhysicalHealth from './MainSubViews/PhysicalHealth';
import Sanity from './MainSubViews/Sanity';
import Sleep from './MainSubViews/Sleep';

const Main: React.FC = () => {
  const navigation = useNavigation();
  const userState = useSelector(({ user }) => user);
  const state = useSelector(({ data }) => data);
  const totalKcalEaten =
    state.food.firstMeal +
    state.food.secondMeal +
    state.food.thirdMeal +
    state.food.fourthMeal +
    state.food.fifthMeal;
  const totalKcalBurnt = state.physical.exercises.reduce((acc, curr) => acc + curr.kcalBurnt, 0);

  const sleepScore = calculateSleepScore(state.sleep.score);
  const foodScore = calculateFoodScore(totalKcalEaten, userState.kcalGoal);
  const sanityScore = calculateSanityScore(
    state.sanity.goodDeeds.length,
    state.sanity.completedTasks
  );
  const sportScore = calculateSportScore(totalKcalBurnt, totalKcalEaten);

  return (
    <Layout>
      <ProgressHeader
        title="Perfect Day"
        progress={calculateOverallScore(sleepScore, foodScore, sanityScore, sportScore)}
        height={20}
      />
      <ScrollView>
        <BoxesWrapper>
          <ActivityBox
            title="Sen"
            progress={sleepScore}
            icon="moon-o"
            onPress={() => navigation.navigate('Sleep')}
          />
          <ActivityBox
            title="Jedzenie"
            progress={foodScore}
            icon="glass"
            onPress={() => navigation.navigate('Food')}
          />
          <ActivityBox
            title={`Zdrowie \npsychiczne`}
            progress={sanityScore}
            icon="envira"
            onPress={() => navigation.navigate('Sanity')}
          />
          <ActivityBox
            title="Zdrowie fizyczne"
            progress={sportScore}
            icon="bicycle"
            onPress={() => navigation.navigate('Physical')}
          />
        </BoxesWrapper>
      </ScrollView>
    </Layout>
  );
};

const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <MainStack.Screen name="Main" component={Main} />
    <MainStack.Screen name="Sleep" component={Sleep} />
    <MainStack.Screen name="Food" component={Food} />
    <MainStack.Screen name="Sanity" component={Sanity} />
    <MainStack.Screen name="Physical" component={PhysicalHealth} />
  </MainStack.Navigator>
);

export default MainNavigation;

const BoxesWrapper = styled.ScrollView`
  width: 100%;
  flex: 1;
`;
