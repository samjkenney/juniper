import { Button, StyleSheet, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const [frequency, setFrequency] = useState("");

  const router = useRouter();
  async function storeData(key: string, val: string){
    try {
      await AsyncStorage.setItem(key, val);
    } catch (e) {

    }
  };

  function saveData(){
    console.log('Saved!');
    console.log(frequency);
    const jsonVal = JSON.stringify(frequency);
    const key = "Frequency";
    storeData(key, jsonVal);
    router.navigate('./(tabs)/factors');
  }


  return (
    <View style={styles.container} lightColor = "#072511">
      <Text style={styles.title} lightColor = "#eee">Welcome!</Text>
      <Text style = {styles.subtitle} lightColor = "#eee"> How often would you like to check in?</Text>
      <Text style = {styles.standard} lightColor = "#eee">These settings may be changed at any time.</Text>
      <View style = {styles.optioncontainer} lightColor = "#afc06b">
        <Pressable onPress = {() => setFrequency("Spontaneous")}>
        <Text style = {styles.subtitle} lightColor = "#000">Spontaneous</Text>
        <Text style = {styles.standard} lightColor = "#000">as symptoms and events occur</Text>
        </Pressable>
      </View>
      <View style = {styles.optioncontainer} lightColor = "#afc06b">
        <Pressable onPress = {() => setFrequency("Daily")}>
        <Text style = {styles.subtitle} lightColor = "#000">Daily</Text>
        </Pressable>
      </View>
      <View style = {styles.optioncontainer} lightColor = "#afc06b">
        <Pressable onPress = {() => setFrequency("Weekly")}>
        <Text style = {styles.subtitle} lightColor = "#000">Weekly</Text>
        </Pressable>
      </View>
      <Button title = "Save"  onPress={() => saveData()}/>
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
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subtitle: {
    fontSize: 30,
    marginBottom: 5,
    marginTop: 15,
    marginHorizontal: 25,
  },
  standard: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  optioncontainer: {
    width: 300,
    height: 120,
    backgroundColor : "#afc06b",
    borderRadius: 20,
    marginTop: 15
  },
  next: {
    width: 150,
    height: 60,
    backgroundColor : "#afc06b",
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center'
  },
});
