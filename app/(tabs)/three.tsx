import { StyleSheet, TextInput, Button } from 'react-native';
import {useEffect, useState} from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

export default function TabThreeScreen(){
    useEffect(() => {
        getData()
    });

    const getData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const result = await AsyncStorage.multiGet(keys);
            console.log('All keys:', keys);
            
            setkeys(keys.toString());
            setvalues(result.toString());

            console.log('All results:', result);
        } catch (e) {
            console.log('error');
        }
    };

    const [keys, setkeys] = useState("");
    const [values, setvalues] = useState("");

    return(
        <View>
            <Text> Hi, this is tab three</Text>
            <Text>{ values }</Text>
        </View>
    );
}