import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddScreen from '../src/screens/AddScreen';
// import SquareAddCard from '../src/components/SquareAddCard';
import AddFoodScreen from '../src/screens/AddFoodScreen';
const Stack = createStackNavigator();

export const AddScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null}}>
      <Stack.Screen name="Add" component={AddScreen}/>
      <Stack.Screen name="AddFoodScreen" component={AddFoodScreen}/>
    </Stack.Navigator>
  )
}
