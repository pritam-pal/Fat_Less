import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Custom Components
import {BreakfastCards, LunchCards, SnacksCards, DinnerCards} from '../components/Cards';

export default DetailsScreen = ({ navigation, route }) => {

  let resultCal = 0;
  let resultPro = 0;
  let resultFat = 0;
  let resultCarbo = 0;

  let breakfastName = [];
  let breakfastCal = [];
  let breakfastPro = [];
  let breakfastFat = [];
  let breakfastCarbo = [];

  let lunchName = [];
  let lunchCal = [];
  let lunchPro = [];
  let lunchFat = [];
  let lunchCarbo = [];

  let snacksName = [];
  let snacksCal = [];
  let snacksPro = [];
  let snacksFat = [];
  let snacksCarbo = [];

  let dinnerName = [];
  let dinnerCal = [];
  let dinnerPro = [];
  let dinnerFat = [];
  let dinnerCarbo = [];

  
  let [bfName, setBfName] = useState([]);
  let [bfCal, setBfCal] = useState([]);
  let [bfPro, setBfPro] = useState([]);
  let [bfFat, setBfFat] = useState([]);
  let [bfCarbo, setBfCarbo] = useState([]);

  let [luName, setLuName] = useState([]);
  let [luCal, setLuCal] = useState([]);
  let [luPro, setLuPro] = useState([]);
  let [luFat, setLuFat] = useState([]);
  let [luCarbo, setLuCarbo] = useState([]);

  let [snName, setSnName] = useState([]);
  let [snCal, setSnCal] = useState([]);
  let [snPro, setSnPro] = useState([]);
  let [snFat, setSnFat] = useState([]);
  let [snCarbo, setSnCarbo] = useState([]);

  let [diName, setDiName] = useState([]);
  let [diCal, setDiCal] = useState([]);
  let [diPro, setDiPro] = useState([]);
  let [diFat, setDiFat] = useState([]);
  let [diCarbo, setDiCarbo] = useState([]);


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
        breakfastName.push(item.name);
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
      setBfName(breakfastName);
      setBfCal(breakfastCal);
      setBfPro(breakfastPro);
      setBfFat(breakfastFat);
      setBfCarbo(breakfastCarbo);

      setAddCalBF(resultCal);
      setAddProBF(resultPro)
      setAddFatBF(resultFat)
      setAddCarboBF(resultCarbo)
      resultCal=0;
      resultPro=0;
      resultFat=0;
      resultCarbo=0;
  
      for await (let item of data_lu) {
        lunchName.push(item.name);
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
      setLuName(lunchName);
      setLuCal(lunchCal);
      setLuPro(lunchPro);
      setLuFat(lunchFat);
      setLuCarbo(lunchCarbo);

      setAddCalLU(resultCal);
      setAddProLU(resultPro);
      setAddFatLU(resultFat);
      setAddCarboLU(resultCarbo);
      resultCal=0;
      resultPro=0;
      resultFat=0;
      resultCarbo=0;
  
      for await (let item of data_sn) {
        snacksName.push(item.name);
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
      setSnName(snacksName);
      setSnCal(snacksCal);
      setSnPro(snacksPro);
      setSnFat(snacksFat);
      setSnCarbo(snacksCarbo);

      setAddCalSN(resultCal);
      setAddProSN(resultPro);
      setAddFatSN(resultFat);
      setAddCarboSN(resultCarbo);
      resultCal=0;
      resultPro=0;
      resultFat=0;
      resultCarbo=0;
  
      for await (let item of data_di) {
        dinnerName.push(item.name);
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
      setDiName(dinnerName);
      setDiCal(dinnerCal);
      setDiPro(dinnerPro);
      setDiFat(dinnerFat);
      setDiCarbo(dinnerCarbo);

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
  
  return (
    <View style={styles.container}>
        <View>
          <Text>Report Screen</Text>
        </View>
        <ScrollView >
            
          <BreakfastCards 
            route={route} 
            navigation={navigation} 
            calBF={Math.round(addCalBF)} 
            proBF={Math.round(addProBF)} 
            fatBF={Math.round(addFatBF)} 
            carboBF={Math.round(addCarboBF)}
            nameArr={bfName}
            calArr={bfCal}
            proArr={bfPro}
            fatArr={bfFat}
            carboArr={bfCarbo}
          /> 
          <LunchCards 
            route={route} 
            navigation={navigation} 
            calLU={Math.round(addCalLU)} 
            proLU={Math.round(addProLU)} 
            fatLU={Math.round(addFatLU)} 
            carboLU={Math.round(addCarboLU)}
            nameArr={luName}
            calArr={luCal}
            proArr={luPro}
            fatArr={luFat}
            carboArr={luCarbo}
          />
          <SnacksCards 
            route={route}
            navigation={navigation} 
            calSN={Math.round(addCalSN)} 
            proSN={Math.round(addProSN)} 
            fatSN={Math.round(addFatSN)} 
            carboSN={Math.round(addCarboSN)}
            nameArr={snName}
            calArr={snCal}
            proArr={snPro}
            fatArr={snFat}
            carboArr={snCarbo}
          />
          <DinnerCards 
            route={route}
            navigation={navigation}
            calDI={Math.round(addCalDI)}
            proDI={Math.round(addProDI)}
            fatDI={Math.round(addFatDI)}
            carboDI={Math.round(addCarboDI)}
            nameArr={diName}
            calArr={diCal}
            proArr={diPro}
            fatArr={diFat}
            carboArr={diCarbo}
          />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 120,
    height: '100%',
  }
})