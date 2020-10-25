import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import { setUserData } from '../redux/actions/setUserData';
import ConfigurationForm from './ConfigurationForm';

const Layout: React.FC = ({ children }) => {
  const { configured } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const checkIfUserExists = async () => {
      try {
        const jsonUser = await AsyncStorage.getItem('user');
        if (jsonUser && JSON.parse(jsonUser) !== '') {
          const user = JSON.parse(jsonUser);
          dispatch(setUserData(user));
        }
        return;
      } catch (err) {
        alert(err.message);
      }
    };
    if (!configured) {
      (async () => checkIfUserExists())();
    }
  });
  return (
    <Wrapper contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {configured ? children : <ConfigurationForm />}
    </Wrapper>
  );
};

const Wrapper = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: lightblue;
  font-size: 1.6px;
`;

export default Layout;
