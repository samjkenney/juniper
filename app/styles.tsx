import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "#072511",
    zIndex: 1,
    position: 'relative',
    height: 'auto'
  },
  entry: {
    backgroundColor : "#287f45",
    zIndex: 3,
    width: 300, 
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#287f45'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 4,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  categories: {
    marginVertical: 5, 
    fontSize: 24, 
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    marginBottom: 10, 
    backgroundColor: '#afc06b',
    borderRadius: 25,
    flex: 1,
    width: 350,
    zIndex: 2,
    flexDirection: 'column',
    flexGrow: 0.75,
  },
  dropdown: {
    backgroundColor: "#287f45",
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1111
  },
  dropdownContainer: {
    marginBottom: 10, 
    backgroundColor: '#afc06b',
    borderRadius: 25,
    flex: 0.75,
    width: 350,
    zIndex: 999
  },
  pageHeader: {
    marginBottom: 10,
    color: '#eeeeee',
    fontSize: 40,
    fontWeight: 'bold'
  }
});

export default styles;