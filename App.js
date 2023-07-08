import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterUser from './src/components/RegisterUser';
import SelectGender from './src/components/SelectGender';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
        <Stack.Screen name="SelectGender" component={SelectGender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
