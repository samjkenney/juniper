import { StyleSheet, TextInput, Button } from 'react-native';
import {useState} from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function TabTwoScreen() {
  const inputState = {
    symptom: '',
    time: '',
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
    const key = "event-" + inputs['time'];
    storeData(key, jsonVal);
  }
  
  const handleOnChange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text> Symptom: </Text>
      <TextInput onChangeText={text => handleOnChange(text, 'symptom')}/>
      <Text> Severity: </Text>
      <TextInput onChangeText = {text => handleOnChange(text, 'severity')}/>
      <Text> Time: </Text>
      <TextInput
          onChangeText = {text => handleOnChange(text, 'time')}/>
      <Text> Notes: </Text>
      <TextInput
        onChangeText = {text => handleOnChange(text, 'notes')}/>
      <Button title = "Save" onPress={() => saveData()}/>
      <Button title = "Get text" onPress={() => getData()}/>
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
