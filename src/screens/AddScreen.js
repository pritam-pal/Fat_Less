import * as React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';
import SquareAddCard from '../components/SquareAddCard';

export default DetailsScreen = ({ route, navigation }) => {

  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Add Your foods</Text>
      </View>
      <View>
          <Image
            source={require('../../assets/img/add-hero.jpg')}
            resizeMode='contain'
            style={{
              height: 250,
              width: 345,
              marginTop: 10,
            }}
          />
        </View>
      <ScrollView >
        
        <View>
          <SquareAddCard keys="breakfast" title="Add Breakfast" i={require("../../assets/icons/breakfast.png")} route={route} navigation={navigation}/>
          <SquareAddCard keys="lunch" title="Add Lunch" i={require("../../assets/icons/lunch.png")} route={route} navigation={navigation}/>
          <SquareAddCard keys="snacks" title="Add Snacks" i={require("../../assets/icons/snacks.png")} route={route} navigation={navigation}/>
          <SquareAddCard keys="dinner" title="Add Dinner" i={require("../../assets/icons/dinner.png")} route={route} navigation={navigation}/>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    maxHeight: '82%',
    marginTop: 30,
    paddingBottom: 40,
  },
  title: {
    marginTop: 1,
    fontSize: 25,
    fontWeight: '400',
    color: '#FF1E56',
    width: 350,
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: '#ffeeee',
  }
})