import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllMovies from './views/AllMovies';
import Movie from './views/Movie';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='AllMovies'>
          <Stack.Screen options={{ title: 'Lista com todos os filmes', headerShown: false }} name='AllMovies' component={AllMovies} />
          <Stack.Screen options={{ title: 'Filme' }} name='Movie' component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </>    
  );
}

