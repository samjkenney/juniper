import { Button, StyleSheet, Pressable, TouchableHighlight } from 'react-native';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import styles from '../styles';

export default function FactorsScreen(){
    //create list of available factors with a corresponding boolean
    const factorState = {
        sleep: false,
        diet: false,
        meds: false,
        mood: false,
        weather: false
    };

    const [factors, setFactors] = useState(factorState);
    const router = useRouter();

    async function storeData(key: string, val: string){
    try {
      await AsyncStorage.setItem(key, val);
    } catch (e) {

    }
    };

    function saveData(){
        console.log('Saved!');
        console.log(factors);
        const jsonVal = JSON.stringify(factors);
        const key = "factors";
        storeData(key, jsonVal);
        router.navigate('/(tabs)/two');
    };

    return(
        <View style = {styles.container}>
            <Text style = {styles.pageHeader}> What factors do you want to track? </Text>
            <View style = {styles.inputContainer}>
                <TouchableHighlight activeOpacity={ 0.6} underlayColor={'#C7EF2A'}>
                    <Text style = {styles.categories}> Sleep </Text>
                </TouchableHighlight>
            </View>
            <View style = {styles.inputContainer}>
                <Pressable>
                    <Text style = {styles.categories}> Diet </Text>
                </Pressable>
            </View>
            <View style = {styles.inputContainer}>
                <Pressable>
                    <Text style = {styles.categories}> Medications & Remedies </Text>
                </Pressable>
            </View>
            <View style = {styles.inputContainer}>
                <Pressable>
                    <Text style = {styles.categories}> Mood & Stress </Text>
                </Pressable>
            </View>
            <View style = {styles.inputContainer}>
                <Pressable>
                    <Text style = {styles.categories}> Weather </Text>
                </Pressable>
            </View>
        </View>
    )

    //create a view of all available factors as pressable objects (maybe w checkboxes?)
    // onPress -> corresponding factor should toggle (change from true to false or false to true)
    // add highlight to indicate what is pressed
    // save button saves the data to async storage and routes to next page
}