import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ReportScreen from '../src/screens/ReportScreen';
import { AddScreenStack } from './MyStack';
import { DetailStack } from './MyStack';

const Tab = createBottomTabNavigator();

// Custom Add button
const CustomTabBarAddButton = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          height: 90,
          elevation: 20,
          borderRadius: 15,
          backgroundColor: '#ffeeee',
          ...styles.shadow,
        }
    }}>
      
      <Tab.Screen
        name="Home" 
        component={DetailStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems: 'center', justifyContent: 'center',}}>
              <Image 
                source={require('../assets/icons/home.png')} 
                resizeMode='contain'
                
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12, fontWeight: 'bold', }}>Home</Text>
            </View>
          ),
        }}
      />
      
      <Tab.Screen
        name="Add" 
        component={AddScreenStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems: 'center', justifyContent: 'center',}}>
              <Image 
                source={require('../assets/icons/add.png')} 
                resizeMode='contain'
                style={{
                  width: 70,
                  height: 70,
                  
                }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12, fontWeight: 'bold', }}>Add</Text>
            </View>
          ),
          tabBarButton: (props) => (
            <CustomTabBarAddButton {...props}/>
          )
        }}
      />

      <Tab.Screen 
        name="Detail" 
        component={ReportScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems: 'center', justifyContent: 'center',}}>
              <Image
                source={require('../assets/icons/detail.png')} 
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                  
                }}
              />
              <Text  style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12, fontWeight: 'bold', }}>Report</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
})