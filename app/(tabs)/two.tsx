import { StyleSheet, TextInput, Button, Modal } from 'react-native';
import {useState} from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import { Checkbox } from 'expo-checkbox';
import styles from '../styles';

export default function TabTwoScreen() {
  const inputState = {
    symptom: '',
    time: new Date(),
    severity: '',
    notes: ''
  };


  const [inputs, setInputs] = useState(inputState);


  async function storeData(key: string, val: string){
    try {
      await AsyncStorage.setItem(key, val);
    } catch (e) {

    }
  };

  function saveData(){
    console.log('Saved!');
    console.log(inputs);
    const jsonVal = JSON.stringify(inputs);
    const key = "symptom-" + inputs['time'];
    storeData(key, jsonVal);
    setInputs(inputState);
  }
  
  const handleOnChange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  }

  const handleTime = (value: Date) => {
    handleOnChange(value.toLocaleDateString(), 'time');
  }

  const handleSymptom = (input: any) => {
    handleOnChange(input, 'symptom');
  }

  const getData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      console.log('All keys:', keys);
      console.log('All results:', result);
    } catch (e) {
      console.log('error');
    }
  };

  const [open, setOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Nausea', value: 'nausea'},
    {label: 'Pain (general)', value: 'general_pain'},
    {label: 'Headache', value: 'headache'},
    {label: 'Dizziness', value: 'dizziness'},
    {label: 'Fatigue', value: 'fatigue'},
  ]);

 const [isChecked, setChecked] = useState(false);

  return (
    <View style = {styles.container }>
    <View style={styles.dropdownContainer}>
      <Text style = { styles.categories}> Symptom: </Text>
      <DropDownPicker
        style = {styles.dropdown}
        open={ open}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue = {(value) => handleSymptom(value)}
        value={ value }
        searchable = {true}
        zIndex={ 2000 }
      />
      </View>
      <View style = {styles.inputContainer}>
      <Text style = {styles.categories}> Severity: </Text>
      <TextInput style = {styles.entry}
        onChangeText = {text => handleOnChange(text, 'severity')}
        value = {inputs['severity']}
        keyboardType = "numeric"
        />
      </View>
      <View style = {styles.inputContainer}>
      <Text style = {styles.categories}> Time Start: </Text>
      <DatePicker
        style = {styles.entry}
        modal
        open={dateOpen }
        mode = "datetime"
        date = { inputs.time }
        onConfirm={(date) => {
          handleTime(date);
        }}
        onCancel={() => {
          setOpen(false)
        }}
        />
      </View>
      <View style = {styles.inputContainer}>
        <Text style = {styles.categories}>Ongoing? </Text>
        <Checkbox style = {styles.checkbox} value={isChecked} onValueChange= {setChecked}/>
      </View>
      <View style = { styles.inputContainer }>
        <Text style = {styles.categories}> Notes: </Text>
      <TextInput
        style = {styles.entry}
        onChangeText = {text => handleOnChange(text, 'notes')}
        value= {inputs['notes']}/>
      </View>
      <Button title = "Save" onPress={() => saveData()}/>
      </View>
  );
}