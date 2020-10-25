import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';

import store from './redux/index';
import History from './views/History';
import Main from './views/Main';
import Settings from './views/Settings';
import Tasks from './views/Tasks';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Main">
          <Tab.Screen
            name="Main"
            component={Main}
            options={{
              tabBarLabel: 'Menu',
              tabBarIcon: ({ color, size }) => <Icon name="home" size={size - 5} color={color} />,
            }}
          />
          <Tab.Screen
            name="History"
            component={History}
            options={{
              tabBarLabel: 'Historia',
              tabBarIcon: ({ color, size }) => (
                <Icon name="history" size={size - 5} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Tasks"
            component={Tasks}
            options={{
              tabBarLabel: 'Zadnia',
              tabBarIcon: ({ color, size }) => <Icon name="tasks" size={size - 5} color={color} />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: 'Ustawienia',
              tabBarIcon: ({ color, size }) => <Icon name="gear" size={size - 5} color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
