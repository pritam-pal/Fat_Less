import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'

export default ({route}) => {
  const { name, cal, pro, fat, carbo } = route.params;

  console.log(name)
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  let count = 0;
  const renderName = name.map(name => {
    count ++;
    return(
      <Text key={count}>Name: {name}</Text>
    )
  })

  const renderCal = cal.map(cal => {
    count ++;
    return(
      <Text key={count}>Calories: {cal} cal</Text>
    )
  });
  const renderPro = pro.map(pro => {
    count ++;
    return(
      <Text key={count}>Protein: {pro} g</Text>
    )
  });
  const renderFat = fat.map(fat => {
    count ++;
    return(
      <Text key={count}>Fat: {fat} g</Text>
    )
  });
  const renderCarbo = carbo.map(carbo => {
    count ++;
    return(
      <Text key={count}>Carbo: {carbo} g</Text>
    )
  });
  
  return(
    <View style={styles.container}>
      <Text>Detail screen</Text>
      <View>
        <ScrollView>
          <View>
            {renderName}
            {renderCal}
            {renderPro}
            {renderFat}
            {renderCarbo}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 120,
    paddingTop: 50,
  }
})