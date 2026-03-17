import styles from '../styles';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Button, Pressable, TextInput, ScrollView, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SymptomChoice(){

const [symptoms, setSymptoms] = useState([]);
const router = useRouter();

function handleSymptomChange(symptom: any){
    setSymptoms(prevState => ({...prevState, symptom}));
}

const [items, setItems] = useState([
    {name: 'Nausea', id: 'nausea'},
    {name: 'Pain (general)', id: 'general_pain'},
    {name: 'Headache', id: 'headache'},
    {name: 'Dizziness', id: 'dizziness'},
    {name: 'Fatigue', id: 'fatigue'},
  ]);


 const addInput = () => {
    const newItem = {name: 'empty', id: 'empty'}
    // Add a new empty object to the inputList array in state
    setItems(prevState => ({...prevState, newItem}));
    console.log(items);
  };


return(
    <View style = { styles.container }>
        <Text style = { styles.pageHeader}> What symptoms do you experience frequently? </Text>
        <FlatList data = {items}
        renderItem={({item}) => 
            <Pressable style = {styles.inputContainer}> 
                <TextInput 
                placeholder = {item.name}
                style = {styles.entry}/> 
            </Pressable>}
        keyExtractor={item => item.id}/>
       
        <Button title="Add New" onPress={addInput} />
    </View>
)
};