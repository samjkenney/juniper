import { StyleSheet } from 'react-native';
import {useEffect, useState} from 'react';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

/// Cleaning text for display

// By convention, the data is identified in types by the 0th element
// Relevant data is stored at odd indeces
// Symptom data has symptom, time start, severity, and notes (right now)
// Sleep data has start time, stop time, quality, and notes

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
    const [values, setvalues] = useState(results);
    
    //on first load, get data
    useEffect(() => {
        getData()
    },[]);

    

    return(
        <View>
            <Text style = {styles.title}> Symptoms:</Text>
            <Text> { values }</Text>
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
