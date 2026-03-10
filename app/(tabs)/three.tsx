import { StyleSheet, TextInput, Button } from 'react-native';
import {useEffect, useState} from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { parse } from 'expo-linking';
import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types';

function parseValues(values: string){
    //split into individual entries
    var clean_values = values.split('}');
    var split_values= [];
    //split based into values for each entry
    for (var i = 0; i < clean_values.length; i++){
        split_values[i] = clean_values[i].split(',');
            //split_values[i][j] = split_values[i][j].replaceAll(':', '');  
    }
    var noEmpty = removeEmpty(split_values);
    for (var i = 0; i < noEmpty.length; i++){
        for (var j = 0; j < noEmpty[i].length; j++){
            noEmpty[i][j] = noEmpty[i][j].replaceAll(':\"', '');
            noEmpty[i][j] = noEmpty[i][j].replaceAll('{', '\n');
        }
    }
    return noEmpty;
}

function checkNotEmpty(split_value: string){
  return(split_value != '');
}

function removeEmpty(split_values: string[][]){
    var newArray = []
    for (var i = 0; i < split_values.length; i++){
        if (split_values[i].length > 1){
            newArray.push(split_values[i].filter(checkNotEmpty));
        }   
    }
    return newArray;
}

function findSymptoms(values: string[][]){
    var symptoms = values.filter(checkSymptoms);
    
    return symptoms;
}

function checkSymptoms(values: string[]){
    console.log(values[0]);
    return (values[0].includes('symptom'));
}


function findSleep(values: string[][]){
    var res = values.filter(checkSleep);
    return res;
}

function checkSleep(values: string[]){
    return (values[0].includes('sleep'));
}


export default function TabThreeScreen(){
    useEffect(() => {
        getData()
    });



    const getData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const result = await AsyncStorage.multiGet(keys);
            const allRes = [];
            for (var i = 0; i < keys.length; i++){
                const thisRes = await AsyncStorage.getItem(keys[i]);
                if (thisRes != null){
                    allRes.push(JSON.parse(thisRes));
                }          
            }
            setkeys(keys.toString());
            setvalues(result.toString());

            console.log('All results:', result);
            const strResult = result.toString();
            console.log('String form:', strResult);
            console.log('parsed results from JSON:', allRes);
        } catch (e) {
            console.log('error');
        }
    };

    const [keys, setkeys] = useState("");
    const [values, setvalues] = useState("");

    return(
        <View>
            <Text style = {styles.title}> Symptoms:</Text>
            <Text> { findSymptoms(parseValues(values)) } </Text>
            <Text style = {styles.title}> Sleep: </Text>
            <Text>{ findSleep(parseValues(values)) }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entry: {
    backgroundColor : "#afc06b"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
