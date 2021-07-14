import React from 'react';
import { View,Text,TouchableOpacity, StyleSheet } from 'react-native';


export const BreakfastCards = (props) => {

  // let cal = 0;
  // for (let i = 0; i < props.cal.length; i++) {
  //   cal = cal + props.cal;
  // }
  // console.log(cal + ' from cards components')
  return (
    <View style={ styles.breakfastColor}>

      <View>
        <Text style={styles.title}>Breakfast</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Calories: {props.calBF} cal</Text>
        <Text style={styles.subTitle}>Fat: {props.fatBF} g</Text>
        <Text style={styles.subTitle}>Protein: {props.proBF} g</Text>
        <Text style={styles.subTitle}>Carbohydrates: {props.carboBF} g</Text>
      </View>

    </View>
  );
}
export const LunchCards = (props) => {
  return (
    <View style={styles.lunchColor}>

      <View>
        <Text style={styles.title}>Lunch</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Calories: {props.calLU} cal</Text>
        <Text style={styles.subTitle}>Fat: {props.fatLU} g</Text>
        <Text style={styles.subTitle}>Protein: {props.proLU} g</Text>
        <Text style={styles.subTitle}>Carbohydrates: {props.carboLU} g</Text>
      </View>

    </View>
  );
}
export const SnacksCards = (props) => {
  return (
    <View style={styles.snacksColor}>

      <View>
        <Text style={styles.title}>Snacks</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Calories: {props.calSN} cal</Text>
        <Text style={styles.subTitle}>Fat: {props.fatSN} g</Text>
        <Text style={styles.subTitle}>Protein: {props.proSN} g</Text>
        <Text style={styles.subTitle}>Carbohydrates: {props.carboSN} g</Text>
      </View>

    </View>
  );
}
export const DinnerCards = (props) => {
  return (
    <View style={styles.dinnerColor}>

      <View>
        <Text style={styles.title}>Dinner</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Calories: {props.calDI} cal</Text>
        <Text style={styles.subTitle}>Fat: {props.fatDI} g</Text>
        <Text style={styles.subTitle}>Protein: {props.proDI} g</Text>
        <Text style={styles.subTitle}>Carbohydrates: {props.carboDI} g</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  breakfastColor: {
    backgroundColor: '#FAEBE0',
    color: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 15,
    width: 340,
    borderRadius: 15,
  },
  lunchColor: {
    backgroundColor: '#F6C6EA',
    color: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 15,
    width: 340,
    borderRadius: 15,
  },
  snacksColor: {
    backgroundColor: '#FF94CC',
    color: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 15,
    width: 340,
    borderRadius: 15,
  },
  dinnerColor: {
    backgroundColor: '#FF7171',
    color: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 15,
    width: 340,
    borderRadius: 15,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#010038'
  }

})