import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import ValidateIdentity from './src/components/ValidateIdentity';
import SelectGender from './src/components/SelectGender';
import ValidateCellPhoneNum from './src/components/ValidateCellPhoneNum';
import ValidateNumSms from './src/components/ValidateNumSms';
import Home from './src/components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AutocompleteDropdownContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SelectGender" component={SelectGender} />
          <Stack.Screen name="ValidateIdentity" component={ValidateIdentity} />
          <Stack.Screen name="ValidateCellPhoneNum" component={ValidateCellPhoneNum} />
          <Stack.Screen name="ValidateNumSms" component={ValidateNumSms} />
        </Stack.Navigator>
      </NavigationContainer>
    </AutocompleteDropdownContextProvider>
  );
}
