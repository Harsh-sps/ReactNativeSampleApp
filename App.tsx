/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import PhotosDetailScreen from './src/screens/PhotosDetailScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="PhotosDetail"
          component={PhotosDetailScreen}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
