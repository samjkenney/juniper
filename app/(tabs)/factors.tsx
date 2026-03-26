import { Button, Pressable } from 'react-native';
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

    function handleFactors(val: boolean, factor: string){
        setFactors(prevState => ({...prevState, [factor]: val}));
    }

    function saveData(){
        console.log('Saved!');
        console.log(factors);
        const jsonVal = JSON.stringify(factors);
        const key = "factors";
        storeData(key, jsonVal);
        router.navigate('/(tabs)/symptom');
    };

    return(
        <View style = {styles.container}>
            <Text style = {styles.pageHeader}> What factors do you want to track? </Text>
                <Pressable onPress = {() => handleFactors(!factors.sleep, 'sleep')} style = {[styles.inputContainer, {backgroundColor: factors.sleep ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Sleep </Text>
                </Pressable>
                <Pressable onPress = {() => handleFactors(!factors.sleep, 'diet')} style = {[styles.inputContainer, {backgroundColor: factors.diet ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Diet </Text>
                </Pressable>
                <Pressable onPress = {() => handleFactors(!factors.sleep, 'meds')} style = {[styles.inputContainer, {backgroundColor: factors.meds ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Medications & Remedies </Text>
                </Pressable>
                <Pressable onPress = {() => handleFactors(!factors.mood, 'mood')} style = {[styles.inputContainer, {backgroundColor: factors.mood ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Mood & Stress </Text>
                </Pressable>
                <Pressable onPress = {() => handleFactors(!factors.weather, 'weather')} style = {[styles.inputContainer, {backgroundColor: factors.weather ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Weather </Text>
                </Pressable>
            <Button title = "Save"  onPress={() => saveData()}/>
        </View>
    )
}