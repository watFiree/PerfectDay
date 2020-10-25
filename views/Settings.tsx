import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../components/Button';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { resetStates } from '../redux/actions/resetStates';

const Settings = () => {
  const dispatch = useDispatch();
  const resetData = async () => {
    await AsyncStorage.setItem('user', '');
    dispatch(resetStates());
  };

  return (
    <Layout>
      <Title>Ustawienia</Title>
      <Button>Zmień tryb</Button>
      <Button bgColor="#DC143C" onPress={resetData}>
        Resetuj dane
      </Button>
      <StatusBar style="auto" />
    </Layout>
  );
};

export default Settings;
