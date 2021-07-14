import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddScreen from '../src/screens/AddScreen';
// import SquareAddCard from '../src/components/SquareAddCard';
import AddFoodScreen from '../src/screens/AddFoodScreen';
import HomeScreen from '../src/screens/HomeScreen';
import DetailScreen from '../src/screens/DetailScreen';

const Stack = createStackNavigator();

export const AddScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null}}>
      <Stack.Screen name="Add" component={AddScreen}/>
      <Stack.Screen name="AddFoodScreen" component={AddFoodScreen}/>
    </Stack.Navigator>
  )
}

export const DetailStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen}/>
    </Stack.Navigator>
  )
}