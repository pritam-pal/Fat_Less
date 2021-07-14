import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Keyboard, Button } from 'react-native';
// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY ='vcnEwkhp9PtSE/ViKeD9Og==iSfwc9vV8YjWbrbD';

const date = new Date();

const weekDay = date.getDay()
const today = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
// console.log(today)
// console.log(weekDay)

export default ({ route }) => {

  const { keys } = route.params;
  // console.log(keys)
  const [term, setTerm] = useState('');
  const [query, setQuery] = useState(term);
  const [response, setResponse ] = useState({});
  const [timeStamp, setTimeStamp] = useState([]);

  const [resultBF, setResultBF] = useState({});

  useEffect(() => {
    const timerID = setTimeout(() => {
      setQuery(term)
    }, 2000);
    
    return () =>{ clearTimeout(timerID) };
  }, [term])
  
  useEffect(() => {
    
    const search = async () => {
      if( query != '' ) {
        try {
          const res = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
            method: "GET",
            headers: { 'X-Api-Key': KEY }
          });
          const response_1 = await res.json();
          return setResponse(response_1.items[0]);
        } catch (err) {
          return alert('Not found! 😓');
        }  
      } else return query;
    }
    search();

}, [query]);

  const deleteAllData = async () => {
    
    getAllKeys = async () => {
      let keys = []
      try {
        keys = await AsyncStorage.getAllKeys()
        for(let i = 0; i < keys.length; i++) {
          console.log(keys[i]);
          removeValue(keys[i])
        }
      } catch(e) {
        // read key error
      }

      console.log(keys)
      // example console.log result:
      // ['@MyApp_user', '@MyApp_key']
    }
    
    const removeValue = async (keyDel) => {
      try {
        await AsyncStorage.removeItem('@'+keyDel)
      } catch(e) {
        // remove error
      }
    
      alert('All data deleted')
    }
  }

  const storeData = async () => {
    Keyboard.dismiss();
    if(response != {} && term != '') {
      // Store data
      const storeDataBF = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@breakfast', jsonValue)
        } catch (e) {
          console.log(e);
        }
      }

      const storeDataLU = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@lunch', jsonValue)
        } catch (e) {
          console.log(e);
        }
      }

      const storeDataSN = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@snacks', jsonValue)
        } catch (e) {
          console.log(e);
        }
      }

      const storeDataDI = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@dinner', jsonValue)
        } catch (e) {
          console.log(e);
        }
      }

      // read data
      // const default_data = JSON.stringify({data: []});

      const getDataBF = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@breakfast')
          return jsonValue != null ? JSON.parse(jsonValue) : {data_bf: [{'name': '', 'calories': 0,'protein_g': 0,'fat_total_g': 0,'carbohydrates_total_g': 0}]};
        } catch(e) {
          console.log(e);
        }
      }

      const getDataLU = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@lunch')
          return jsonValue != null ? JSON.parse(jsonValue) : {data_lu: [{'name': '', 'calories': 0,'protein_g': 0,'fat_total_g': 0,'carbohydrates_total_g': 0}]};
        } catch(e) {
          console.log(e);
        }
      }

      const getDataSN = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@snacks')
          return jsonValue != null ? JSON.parse(jsonValue) : {data_sn: [{'name': '', 'calories': 0,'protein_g': 0,'fat_total_g': 0,'carbohydrates_total_g': 0}]};
        } catch(e) {
          console.log(e);
        }
      }

      const getDataDI = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@dinner')
          return jsonValue != null ? JSON.parse(jsonValue) : {data_di: [{'name': '', 'calories': 0,'protein_g': 0,'fat_total_g': 0,'carbohydrates_total_g': 0}]};
        } catch(e) {
          console.log(e);
        }
      }
      // Allocating initial get data calls
      const dataBF = await getDataBF();
      const dataLU = await getDataLU();
      const dataSN = await getDataSN();
      const dataDI = await getDataDI();
      // const newTimeStamp = date.getTime();

      switch(keys) {
        case 'breakfast':
          
          const { data_bf } = dataBF;
          console.log('get dat called success')
          const newBreakfast = {data_bf: [ ...data_bf, response]};
          storeDataBF(newBreakfast);
          console.log(data_bf)
          console.log('new data written')
          alert('Data saved 😘');
          setTerm('');
          setResponse({});

          // console.log(readData('breakfast'))
          // Saving timestamp data for index
          // const { dataTS } = read('breakfastIndex');
          // const breakfastTS = {dataTS: [...dataTS, newTimeStamp]};
          // saveTimeStamp('breakfastIndex', breakfastTS);

          // Saving breakfast data
          // const { dataBF } = read('breakfast');
          // const breakfast = { dataBF: [...dataBF, response]};
          // const breakfast = response
          // saveBreakfast('breakfast', breakfast)
          // console.log(read('breakfast'))
          // let getIndexB = MMKV.getString('breakfastIndex');
          // getIndexB = JSON.parse(getIndexB);
          // const oldTimeStampB = getIndexB.index;
          // const indexB = {index: [...oldTimeStampB, timeStamp]};
          // MMKV.set('breakfastIndex', indexB);

          // const getDataB = MMKV.getString('breakfast');
          // const breakfastCopy = JSON.parse(getDataB);
          // const breakfast = {timeStamp: [[breakfastCopy, response], weekDay, today]};
          // setResponse({});
          // MMKV.set('breakfast', JSON.stringify(breakfast));
          console.log('b clicked');
          break;

        case 'lunch':
          
          const { data_lu } = dataLU;
          console.log('get dat called success')
          const newLunch = {data_lu: [ ...data_lu, response]};
          storeDataLU(newLunch);
          console.log(data_lu)
          console.log('new data written')
          alert('Data saved 😘');
          setTerm('');
          setResponse({});
          
        // Saving lunch data
        // const { dataLU } = read('lunch');
        // const lunch = { dataLU: [...dataLU, response]};
        // saveLunch('lunch', lunch)
          // let getIndexL = MMKV.getString('lunchIndex');
          // getIndexL = JSON.parse(getIndexL);
          // const oldTimeStampL = getIndexL.index;
          // const indexL = {index: [...oldTimeStampL, timeStamp]};
          // MMKV.set('lunchIndex', indexL);

          // const getDataL = MMKV.getString('lunch');
          // const lunchCopy = JSON.parse(getDataL);
          // const lunch = {timeStamp: [[lunchCopy, response], weekDay, today]};
          // setResponse({});
          // MMKV.set('lunch', JSON.stringify(lunch));
          // console.log('l clicked');
          break;

        case 'snacks':
          
          const { data_sn } = dataSN;
          console.log('get dat called success')
          const newSnacks = {data_sn: [ ...data_sn, response]};
          storeDataSN(newSnacks);
          console.log(data_sn)
          console.log('new data written')
          alert('Data saved 😘');
          setTerm('');
          setResponse({});
          // Saving breakfast data
          // const { dataSN } = read('snacks');
          // const snacks = { dataSN: [...dataSN, response]};
          // saveSnacks('snacks', snacks)
          // let getIndexS = MMKV.getString('snacksIndex');
          // getIndexS = JSON.parse(getIndexS);
          // const oldTimeStampS = getIndexS.index;
          // const indexS = {index: [...oldTimeStampS, timeStamp]};
          // MMKV.set('snacksIndex', indexS)

          // const getDataS = MMKV.getString('snacks');
          // const snacksCopy = JSON.parse(getDataS);
          // const snacks = {timeStamp: [[snacksCopy, response], weekDay, today]};
          // setResponse({});
          // MMKV.set('snacks', JSON.stringify(snacks));
          // console.log('s clicked');
          break;

        case 'dinner':
          
          const { data_di } = dataDI;
          console.log('get dat called success')
          const newDinner = {data_di: [ ...data_di, response]};
          storeDataDI(newDinner);
          console.log(data_di);
          console.log('new data written');
          alert('Data saved 😘');
          setTerm('');
          setResponse({});



          // Saving breakfast data
          // const { dataDR } = read('dinner');
          // const dinner = { dataDR: [...dataDR, response]};
          // saveDinner('dinner', dinner)
          // let getIndexD = MMKV.getString('dinnerIndex');
          // getIndexD = JSON.parse(getIndexD);
          // const oldTimeStampD = getIndexD.index;
          // const indexD = {index: [...oldTimeStampD, timeStamp]};
          // MMKV.set('dinnerIndex', indexD);

          // const getDataD = MMKV.getString('dinner');
          // const dinnerCopy = JSON.parse(getDataD);
          // const dinner = {timeStamp: [[dinnerCopy, response], weekDay, today]};
          // setResponse({});
          // MMKV.set('dinner', JSON.stringify(dinner));
          // console.log('d clicked');
          break;

        default:
          alert('An error cooer! 😵');
          break;
      }

    } else return alert('Please search some food');

  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View>
          <Text style={styles.title}>Search Food</Text>
        </View>
        <View style={styles.searchBox}>
          <View style={styles.searchList}>
            <TextInput placeholder="Search food" style={{width: '85%',}} value={term} onChangeText={ text => setTerm(text) }/>
            {console.log(query)}
            <TouchableOpacity  onPress={ e => {
              // console.log(response);
              Keyboard.dismiss();
            }}>
              <Image source={require('../../assets/icons/search.png')} style={{ width:20, height:20, tintColor:'#00ff00'}}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.searchItem} onPress={() => storeData()}>
            <Text style={{ fontSize: 15, }}>{ response.name }</Text>
          </TouchableOpacity>
          {/* <Button onPress={deleteAllData()} title="Delate"></Button> */}
        </View>
        
      </KeyboardAvoidingView>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    display: 'flex',
  },
  searchList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00ff00',
    marginBottom: 5,
  },
  searchItem: {
    width: 300,
    backgroundColor: '#eee',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },
  title: {
    letterSpacing: 10,
    lineHeight: 50,
    fontWeight: '400',
    fontSize: 35,
    color: '#00ff00',
    marginBottom: 100,
  },

})