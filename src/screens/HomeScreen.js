import  React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Custom Components
import {BreakfastCards, LunchCards, SnacksCards, DinnerCards} from '../components/Cards';


// Allocating initial data for rendering

export default HomeScreen = ({ navigation }) => {
  // let reload = 0;
  let resultCal = 0;
  let resultPro = 0;
  let resultFat = 0;
  let resultCarbo = 0;

  let breakfastCal = [];
  let breakfastPro = [];
  let breakfastFat = [];
  let breakfastCarbo = [];
  let lunchCal = [];
  let lunchPro = [];
  let lunchFat = [];
  let lunchCarbo = [];
  let snacksCal = [];
  let snacksPro = [];
  let snacksFat = [];
  let snacksCarbo = [];
  let dinnerCal = [];
  let dinnerPro = [];
  let dinnerFat = [];
  let dinnerCarbo = [];

  let [reload, setReload] = useState(false);
  let [addCalBF, setAddCalBF] = useState(resultCal);
  let [addProBF, setAddProBF] = useState(resultPro);
  let [addFatBF, setAddFatBF] = useState(resultFat);
  let [addCarboBF, setAddCarboBF] = useState(resultCarbo);
  let [addCalLU, setAddCalLU] = useState(resultCal);
  let [addProLU, setAddProLU] = useState(resultPro);
  let [addFatLU, setAddFatLU] = useState(resultFat);
  let [addCarboLU, setAddCarboLU] = useState(resultCarbo);
  let [addCalSN, setAddCalSN] = useState(resultCal);
  let [addProSN, setAddProSN] = useState(resultPro);
  let [addFatSN, setAddFatSN] = useState(resultFat);
  let [addCarboSN, setAddCarboSN] = useState(resultCarbo);
  let [addCalDI, setAddCalDI] = useState(resultCal);
  let [addProDI, setAddProDI] = useState(resultPro);
  let [addFatDI, setAddFatDI] = useState(resultFat);
  let [addCarboDI, setAddCarboDI] = useState(resultCarbo);

  useEffect(() => {
    (async () => {

      const getDataBF = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@breakfast')
          return jsonValue != null ? JSON.parse(jsonValue) : {data_bf: [{'name':'', 'calories': 0,'protein_g': 0,'fat_total_g': 0,'carbohydrates_total_g': 0}]};
        } catch(e) {
          console.log(e);
        }
      }
  
      const getDataLU = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@lunch')
          return jsonValue != null ? JSON.parse(jsonValue) : {data_lu: [{'name':'', 'calories': 0,'protein_g': 0,'fat_total_g': 0,'carbohydrates_total_g': 0}]};
        } catch(e) {
          console.log(e);
        }
      }
  
      const getDataSN = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@snacks')
          return jsonValue != null ? JSON.parse(jsonValue) : {data_sn: [{'name':'', 'calories': 0,'protein_g': 0,'fat_total_g': 0,'carbohydrates_total_g': 0}]};
        } catch(e) {
          console.log(e);
        }
      }
  
      const getDataDI = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@dinner')
          return jsonValue != null ? JSON.parse(jsonValue) : {data_di: [{'name':'', 'calories': 0,'protein_g': 0,'fat_total_g': 0,'carbohydrates_total_g': 0}]};
        } catch(e) {
          console.log(e);
        }
      }
  
      const dataBF = await getDataBF();
      const dataLU = await getDataLU();
      const dataSN = await getDataSN();
      const dataDI = await getDataDI();
  
      const {data_bf} = dataBF;
      const {data_lu} = dataLU;
      const {data_sn} = dataSN;
      const {data_di} = dataDI;
      
      for await (let item of data_bf) {
        let cal = item.calories;
        breakfastCal.push(cal);
        resultCal += cal;
  
        let pro = item.protein_g;
        breakfastPro.push(pro);
        resultPro += pro;
        
        let fat = item.fat_total_g;
        breakfastFat.push(fat);
        resultFat += fat;
  
        let carbo = item.carbohydrates_total_g;
        breakfastCarbo.push(carbo);
        resultCarbo += carbo;
      }
      setAddCalBF(resultCal);
      setAddProBF(resultPro)
      setAddFatBF(resultFat)
      setAddCarboBF(resultCarbo)
      resultCal=0;
      resultPro=0;
      resultFat=0;
      resultCarbo=0;
  
      for await (let item of data_lu) {
        let cal = item.calories;
        lunchCal.push(cal);
        resultCal += cal;
  
        let pro = item.protein_g;
        lunchPro.push(pro);
        resultPro += pro;
        
        let fat = item.fat_total_g;
        lunchFat.push(fat);
        resultFat += fat;
  
        let carbo = item.carbohydrates_total_g;
        lunchCarbo.push(carbo);
        resultCarbo += carbo;
      }
      setAddCalLU(resultCal);
      setAddProLU(resultPro);
      setAddFatLU(resultFat);
      setAddCarboLU(resultCarbo);
      resultCal=0;
      resultPro=0;
      resultFat=0;
      resultCarbo=0;
  
      for await (let item of data_sn) {
        let cal = item.calories;
        snacksCal.push(cal);
        resultCal += cal;
  
        let pro = item.protein_g;
        snacksPro.push(pro);
        resultPro += pro;
        
        let fat = item.fat_total_g;
        snacksFat.push(fat);
        resultFat += fat;
  
        let carbo = item.carbohydrates_total_g;
        snacksCarbo.push(carbo);
        resultCarbo += carbo;
      }
      setAddCalSN(resultCal);
      setAddProSN(resultPro);
      setAddFatSN(resultFat);
      setAddCarboSN(resultCarbo);
      resultCal=0;
      resultPro=0;
      resultFat=0;
      resultCarbo=0;
  
      for await (let item of data_di) {
        let cal = item.calories;
        dinnerCal.push(cal);
        resultCal += cal;
  
        let pro = item.protein_g;
        dinnerPro.push(pro);
        resultPro += pro;
        
        let fat = item.fat_total_g;
        dinnerFat.push(fat);
        resultFat += fat;
  
        let carbo = item.carbohydrates_total_g;
        dinnerCarbo.push(carbo);
        resultCarbo += carbo;
      }
      setAddCalDI(resultCal);
      setAddProDI(resultPro);
      setAddFatDI(resultFat);
      setAddCarboDI(resultCarbo);
      resultCal=0;
      resultPro=0;
      resultFat=0;
      resultCarbo=0;
      
      if(reload === true) {
        setReload(false)
      } else {
        setReload(true)
      }

    })()
    
  }, [reload])
  

  // const [breakfastCal, setBreakfastCal] = useState([]);
  // const [breakfastPro, setBreakfastPro] = useState([]);
  // const [breakfastFat, setBreakfastFat] = useState([]);
  // const [breakfastCarbo, setBreakfastCarbo] = useState([]);
  // const [lunchCal, setLunchCal] = useState([]);
  // const [lunchPro, setLunchPro] = useState([]);
  // const [lunchFat, setLunchFat] = useState([]);
  // const [lunchCarbo, setLunchCarbo] = useState([]);
  // const [snacksCal, setSnacksCal] = useState([]);
  // const [snacksPro, setSnacksPro] = useState([]);
  // const [snacksFat, setSnacksFat] = useState([]);
  // const [snacksCarbo, setSnacksCarbo] = useState([]);
  // const [dinnerCal, setDinnerCal] = useState([]);
  // const [dinnerPro, setDinnerPro] = useState([]);
  // const [dinnerFat, setDinnerFat] = useState([]);
  // const [dinnerCarbo, setDinnerCarbo] = useState([]);
  // const [result, setResult] = useState([]);

  

  
  return (
      
      <View style={styles.container}>
        
        <ScrollView>
          <View>
            <Image
              source={require('../../assets/img/home-hero.jpg')}
              style={{
                height: 200,
                width: 345,
                borderRadius: 15,
                marginTop: 50,
                marginBottom: 100,
                position: 'relative',
              }}
              
            />
            <Text style={{
                position: 'absolute',
                top: 10,
                left: 1,
                fontSize: 30,
                fontWeight: '300',
                color: '#FF1E56'
            }}>
              Fat-less
            </Text>
            <Text style={{
                position: 'absolute',
                top: 240,
                left: 20,
                fontSize: 40,
                fontWeight: '300',
                lineHeight: 50,
                color: '#00ff00'
            }}>
              Eat food, stay Healthy
            </Text>
          </View>
          
          {/* <Text>Home Screen</Text> */}
          <BreakfastCards calBF={Math.round(addCalBF)} proBF={Math.round(addProBF)} fatBF={Math.round(addFatBF)} carboBF={Math.round(addCarboBF)} /> 
          <LunchCards calLU={Math.round(addCalLU)} proLU={Math.round(addProLU)} fatLU={Math.round(addFatLU)} carboLU={Math.round(addCarboLU)}/>
          <SnacksCards calSN={Math.round(addCalSN)} proSN={Math.round(addProSN)} fatSN={Math.round(addFatSN)} carboSN={Math.round(addCarboSN)}/>
          <DinnerCards calDI={Math.round(addCalDI)} proDI={Math.round(addProDI)} fatDI={Math.round(addFatDI)} carboDI={Math.round(addCarboDI)}/>
        </ScrollView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // maxHeight: '100%',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 120,
  },
});


// #FF1E56