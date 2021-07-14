import * as React from 'react';
import { useColorScheme, View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

// My own imports
import Tabs from './navigation/Tabs';


const MyTheme = {
  ...DarkTheme,
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#fff',
    card: '#fff',
    text: '#867AE9',
    border: '#fff',
    notification: 'rgb(255, 69, 58)',
  },
};

export default () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
      <Tabs />
    </NavigationContainer>
  );
}
