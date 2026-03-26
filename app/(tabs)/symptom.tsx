import styles from '../styles';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Button, Pressable, TextInput, ScrollView, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SymptomChoice(){
const symptomState = {
    nausea: false,
    general_pain: false,
    headache: false,
    dizziness: false,
    fatigue: false
}

const [symptoms, setSymptoms] = useState(symptomState);
const router = useRouter();

function handleSymptomChange(val: boolean, symptom: any){
    //if symptom in symptoms, toggle value (handled elsewhere)
    if (symptom in symptoms){
        setSymptoms(prevState => ({...prevState, [symptom]: val}));
    }
    //else, add to symptoms and set to true
    else{
        setSymptoms(prevState => ({...prevState, [symptom]: true}));
    }
}

const [items, setItems] = useState([
    {name: 'Nausea', id: 'nausea'},
    {name: 'Pain (general)', id: 'general_pain'},
    {name: 'Headache', id: 'headache'},
    {name: 'Dizziness', id: 'dizziness'},
    {name: 'Fatigue', id: 'fatigue'},
  ]);

const [textEntry, setTextEntry] = useState('');
function handleButtonPress(){
    handleSymptomChange(true, textEntry);
    setTextEntry('');
    console.log(symptoms);
}

function saveData(){
        console.log('Saved!');
        console.log(symptoms);
        const jsonVal = JSON.stringify(symptoms);
        const key = "symptoms";
        storeData(key, jsonVal);
        router.navigate('/(tabs)/two');
    };

async function storeData(key: string, val: string){
    try {
      await AsyncStorage.setItem(key, val);
    } catch (e) {

    }
    };

return(
    <View style = { styles.container }>
        <Text style = { styles.pageHeader}> What symptoms do you experience frequently? </Text>
        <Pressable onPress = {() => handleSymptomChange(!symptoms.nausea, 'nausea')} style = {[styles.inputContainer, {backgroundColor: symptoms.nausea ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Nausea </Text>
        </Pressable>
        <Pressable onPress = {() => handleSymptomChange(!symptoms.general_pain, 'general_pain')} style = {[styles.inputContainer, {backgroundColor: symptoms.general_pain ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Pain (General) </Text>
        </Pressable>
        <Pressable onPress = {() => handleSymptomChange(!symptoms.headache, 'headache')} style = {[styles.inputContainer, {backgroundColor: symptoms.headache ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Headache </Text>
        </Pressable>
        <Pressable onPress = {() => handleSymptomChange(!symptoms.dizziness, 'dizziness')} style = {[styles.inputContainer, {backgroundColor: symptoms.dizziness ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Dizziness </Text>
        </Pressable>
        <Pressable onPress = {() => handleSymptomChange(!symptoms.fatigue, 'fatigue')} style = {[styles.inputContainer, {backgroundColor: symptoms.fatigue ? "#C7Ef2a": "#afc06b"}]}>
                    <Text style = {styles.categories}> Fatigue </Text>
        </Pressable>
        <Button title = "Save"  onPress={() => saveData()}/>
    </View>
)
};