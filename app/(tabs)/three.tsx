import { StyleSheet, TextInput, Button } from 'react-native';
import {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { parse } from 'expo-linking';
import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types';



function checkSleep(values: string[]){
    return (values[0].includes('sleep'));
}

function getSleep(values: string[]){

}


export default function TabThreeScreen(){
    const results : string[] = [];

    const getData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            console.log("How many keys?", keys.length);
            for (var i = 0; i < keys.length; i++){
                console.log('I:', i);
                var thisRes = await AsyncStorage.getItem(keys[i]);
                console.log('Result', thisRes);
                
                if (thisRes != null){
                    results.push(thisRes);
                
                }
            }
            setkeys(keys.toString());   
            console.log("Keys:", keys);    
            console.log(results);
         }
        catch{
           console.log("NO!") 
        };
}

     const [keys, setkeys] = useState("");
    const [values, setvalues] = useState([['']]);
    
    useEffect(() => {
        getData()
    },[]);

    

    return(
        <View>
            <Text style = {styles.title}> Symptoms:</Text>
            <Text style = {styles.title}> Sleep: </Text>
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
