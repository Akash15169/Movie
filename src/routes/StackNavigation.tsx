import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import MovieDetail from '../screens/MovieDetails';

const Stack = createNativeStackNavigator<NativeStackNavigationParamList>();

export type NativeStackNavigationParamList = {
  HomeScreen: undefined;
  MovieDetails: {data: any};
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetail}
          options={{headerShown: false}}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation