import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default ({ navigation, title, i, keys }) => {
  
  return (
    <View  style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.addButton}
          onPress={() => navigation.navigate('AddFoodScreen', {keys: keys})}
        > 
          <Image
            source={i}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text style={{ fontSize: 19, }}>{title}</Text>
          <Image
            source={require('../../assets/icons/plus.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
              tintColor: '#00ff00',
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  addButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: 10,
    width: 340,
    borderRadius: 50,
    borderColor: '#00ff00',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})
