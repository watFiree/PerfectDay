import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import * as yup from 'yup';

import { setUserData } from '../redux/actions/setUserData';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import Input from './Input';
import Text from './Text';
import Title from './Title';

const validationSchema = yup.object().shape({
  name: yup.string().required('Imię jest wymagane !'),
  age: yup
    .number()
    .typeError('Prosze podać liczbę !')
    .min(1, 'Wiek nie może być mniejszy od 1')
    .max(120, 'Człowiek nie jest w stanie tyle żyć :P')
    .required('Wiek jest wymagany'),
  weight: yup
    .number()
    .typeError('Prosze podać liczbę !')
    .min(0, 'Waga musi być wieksza od 0')
    .max(200, 'Za duża waga')
    .required('Waga jest wymagana'),
  kcalGoal: yup
    .number()
    .typeError('Prosze podać liczbę !')
    .min(0, 'Wymagane powyżej zera !')
    .max(15000, 'Za duża ilość kalorii')
    .required('Cel kalorii jest wymagany '),
});

const ConfigurationForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeUser = async (data) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(data));
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Container>
      <Title>PerfectDay</Title>
      <Text>{`Witaj w naszje aplikacji PerfectDay. \nZacznijmy od prostej konfiguracji !`}</Text>
      <Formik
        initialValues={{ name: '', age: '', weight: '', kcalGoal: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await storeUser(values);
          dispatch(setUserData(values));
          navigation.navigate('Main');
        }}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <Input
              value={values.name}
              placeholder="Twoje imię"
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
            />
            <ErrorMessage>{touched.name && errors.name}</ErrorMessage>
            <Input
              value={values.age}
              placeholder="Twój wiek"
              keyboardType="numeric"
              onBlur={handleBlur('age')}
              onChangeText={handleChange('age')}
            />
            <ErrorMessage>{touched.age && errors.age}</ErrorMessage>
            <Input
              value={values.weight}
              placeholder="Twoja waga"
              keyboardType="numeric"
              onBlur={handleBlur('weight')}
              onChangeText={handleChange('weight')}
            />
            <ErrorMessage>{touched.weight && errors.weight}</ErrorMessage>
            <Input
              value={values.kcalGoal}
              placeholder="Twój dzienny cel kiloklorii"
              keyboardType="numeric"
              onBlur={handleBlur('kcalGoal')}
              onChangeText={handleChange('kcalGoal')}
            />
            <ErrorMessage>{touched.kcalGoal && errors.kcalGoal}</ErrorMessage>
            <Button onPress={handleSubmit}>Zakończ konfiguracje</Button>
          </>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export default ConfigurationForm;
