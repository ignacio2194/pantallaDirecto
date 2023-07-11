import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ValidateIdentity from './src/components/ValidateIdentity';
import SelectGender from './src/components/SelectGender';
import ValidateCellPhoneNum from './src/components/ValidateCellPhoneNum'
import Home from './src/components/Home'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectGender" component={SelectGender} />
        <Stack.Screen name="ValidateIdentity" component={ValidateIdentity} />
        <Stack.Screen name="ValidateCellPhoneNum" component={ValidateCellPhoneNum} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
