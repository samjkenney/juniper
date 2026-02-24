import { StyleSheet, TextInput, Button } from 'react-native';
import {useState} from 'react';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabFourScreen(){
  const inputState = {
    time_start: '',
    time_stop: '',
    quality: '',
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
    const key = "sleep-" + inputs.time_stop;
    storeData(key, jsonVal);
    setInputs(inputState);
  }
  
  const handleOnChange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  }


  return(
    <View style={styles.container}>
      <Text style={styles.title}>Sleep</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>What was your sleep time?</Text>
      <Text> Went to bed at: </Text>
        <TextInput
         onChangeText = {text => handleOnChange(text, 'time_start')}
         value = { inputs['time_start'] }/>
        <Text> Woke up at:</Text>
        <TextInput 
        onChangeText = {text => handleOnChange(text, 'time_stop')}
        value = { inputs['time_stop']}/>
      <Text> Quality: </Text>
      <TextInput 
      onChangeText = {text => handleOnChange(text, 'quality')}
      value = {inputs['quality']}/>
      <Text> Notes: </Text>
      <TextInput
        onChangeText = {text => handleOnChange(text, 'notes')}
        value = { inputs['notes'] }/>
      <Button title = "Save" onPress={() => saveData()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
