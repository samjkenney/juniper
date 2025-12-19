import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container} lightColor = "#072511">
      <Text style={styles.title} lightColor = "#eee">Welcome!</Text>
      <Text style = {styles.subtitle} lightColor = "#eee"> How often would you like to check in?</Text>
      <Text style = {styles.standard} lightColor = "#eee">These settings may be changed at any time.</Text>
      <View style = {styles.optioncontainer} lightColor = "#afc06b">
        <Text style = {styles.subtitle} lightColor = "#000">Spontaneous</Text>
        <Text style = {styles.standard} lightColor = "#000">as symptoms and events occur</Text>
      </View>
      <View style = {styles.optioncontainer} lightColor = "#afc06b">
        <Text style = {styles.subtitle} lightColor = "#000">Daily</Text>
      </View>
      <View style = {styles.optioncontainer} lightColor = "#afc06b">
        <Text style = {styles.subtitle} lightColor = "#000">Weekly</Text>
      </View>
      <View style = {styles.next}>
        <Text style = {styles.subtitle} lightColor = "#000">Next</Text>
      </View>
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
