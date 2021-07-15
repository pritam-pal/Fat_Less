import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Image  } from 'react-native'

export default ({route}) => {
  const { total } = route.params;
  

  const render = total.map(item => {
    if(item.name === '') return null;
    return (
      <View>
        <Text style={styles.title} key={Math.random()}>{item.name}</Text>
        <View style={styles.contentBox}>
          <Text style={styles.content} key={Math.random()}>Calories: {item.calories} kcal</Text>
          <Text style={styles.content} key={Math.random()}>Protein: {item.protein_g} g</Text>
          <Text style={styles.content} key={Math.random()}>Fat: {item.fat_total_g} g</Text>
          <Text style={styles.content} key={Math.random()}>Carbohydrates: {item.carbohydrates_total_g} g</Text>
        </View>
      </View>
    )
  })
  
  return(
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/icons/basket.png')}
          resizeMode='contain'
          style={{
            width: 300,
            height: 200,
            marginBottom: 20,
          }}
        />
        <ScrollView>
          <View>
            {render}
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
    paddingBottom: 150,
    paddingTop: 70,
  },
  title: {
    fontSize: 25,
    color: '#00ff00',
    paddingVertical: 10,
    width: 300,
    borderRadius: 15,
    borderColor: '#00ff00',
    borderWidth: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: 4,
  },
  contentBox: {
    paddingVertical: 15,
    paddingTop: 30,
    marginTop: -20,
    marginBottom: 10,
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderColor: '#00ff00',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  content: {
    fontSize: 18,
    color: '#333',
    paddingLeft: 20,
  }
})