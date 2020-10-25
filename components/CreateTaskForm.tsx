import { Formik } from 'formik';
import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import * as yup from 'yup';

import { createTask } from '../redux/actions/createTask';
import CloseButton from './CloseButton';
import ErrorMessage from './ErrorMessage';
import Title from './Title';

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(4, 'Zbyt krótki tytuł')
    .max(12, 'Zbyt długi tytuł (max 12)')
    .required('Tytuł jest wymagany'),
  description: yup.string(),
});

const CreateTaskForm: React.FC<{
  closeFormFunc: () => void;
}> = ({ closeFormFunc }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>Stwórz zadanie</Title>
      <CloseButton onPress={closeFormFunc} />
      <Formik
        initialValues={{ title: '', description: '', status: false }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(createTask(values));
          closeFormFunc();
        }}>
        {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Input
              value={values.title}
              placeholder="Tytuł"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
            />
            <ErrorMessage>{touched.title && errors.title}</ErrorMessage>
            <Input
              value={values.description}
              placeholder="Opis"
              multiline
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
            />
            <ErrorMessage>{touched.description && errors.description}</ErrorMessage>
            <Button title="Stwórz" onPress={() => handleSubmit()} />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateTaskForm;

const Container = styled.View`
  position: absolute;
  width: 90%;
  min-height: 250px;
  height: 50%;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 16px;
  border: 3px solid gray;
  padding: 16px;
`;

const Form = styled.View`
  width: 100%;
  flex: 0.7;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.TextInput`
  border: 1px solid darkgray;
  font-size: 18px;
  padding: 6px;
`;
