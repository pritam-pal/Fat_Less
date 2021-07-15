import React, {useEffect, useState} from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Custom Components
import {BreakfastCards, LunchCards, SnacksCards, DinnerCards} from '../components/Cards';

export default DetailsScreen = ({ navigation, route }) => {

  let resultCal = 0;
  let resultPro = 0;
  let resultFat = 0;
  let resultCarbo = 0;

  const [breakfast, setBreakfast] = useState({});
  const [lunch, setLunch] = useState({});
  const [snacks, setSnacks] = useState({});
  const [dinner, setDinner] = useState({});
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
      
      setBreakfast(data_bf);
      setLunch(data_lu)
      setSnacks(data_sn)
      setDinner(data_di)

      for await (let item of data_bf) {
        let cal = item.calories;
        resultCal += cal;
  
        let pro = item.protein_g;
        resultPro += pro;
        
        let fat = item.fat_total_g;
        resultFat += fat;
  
        let carbo = item.carbohydrates_total_g;
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
        resultCal += cal;
  
        let pro = item.protein_g;
        resultPro += pro;
        
        let fat = item.fat_total_g;
        resultFat += fat;
  
        let carbo = item.carbohydrates_total_g;
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
        resultCal += cal;
  
        let pro = item.protein_g;
        resultPro += pro;
        
        let fat = item.fat_total_g;
        resultFat += fat;
  
        let carbo = item.carbohydrates_total_g;
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
        resultCal += cal;
  
        let pro = item.protein_g;
        resultPro += pro;
        
        let fat = item.fat_total_g;
        resultFat += fat;
  
        let carbo = item.carbohydrates_total_g;
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
  
  return (
    <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/icons/food.png')}
            resizeMode='contain'
            style={{
              width: 300,
              height: 200,
              marginBottom: 10,
            }}
          />
        </View>
        <ScrollView >
            
          <BreakfastCards 
            route={route} 
            navigation={navigation} 
            calBF={Math.round(addCalBF)} 
            proBF={Math.round(addProBF)} 
            fatBF={Math.round(addFatBF)} 
            carboBF={Math.round(addCarboBF)}
            totalObj={breakfast}
          /> 
          <LunchCards 
            route={route} 
            navigation={navigation} 
            calLU={Math.round(addCalLU)} 
            proLU={Math.round(addProLU)} 
            fatLU={Math.round(addFatLU)} 
            carboLU={Math.round(addCarboLU)}
            totalObj={lunch}
          />
          <SnacksCards 
            route={route}
            navigation={navigation} 
            calSN={Math.round(addCalSN)} 
            proSN={Math.round(addProSN)} 
            fatSN={Math.round(addFatSN)} 
            carboSN={Math.round(addCarboSN)}
            totalObj={snacks}
          />
          <DinnerCards 
            route={route}
            navigation={navigation}
            calDI={Math.round(addCalDI)}
            proDI={Math.round(addProDI)}
            fatDI={Math.round(addFatDI)}
            carboDI={Math.round(addCarboDI)}
            totalObj={dinner}
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