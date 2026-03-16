import { Button, StyleSheet, Pressable } from 'react-native';
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
    }

    const [factors, setFactors] = useState(factorState);

    //create a view of all available factors as pressable objects
    // onPress -> corresponding factor should toggle (change from true to false or false to true)
    // add highlight to indicate what is pressed
    // save button saves the data to async storage and routes to next page
}