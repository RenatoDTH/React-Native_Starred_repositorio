import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#7159c1' },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      >
        <AppStack.Screen name="Usuários" component={Main} />
        <AppStack.Screen
          name="Detalhes"
          component={User}
          options={({ route }) => ({ title: route.params.user.name })}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

/* const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes; */
