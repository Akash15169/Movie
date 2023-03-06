
import { StyleSheet } from 'react-native';

const darkMode = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#1a1a1a'
    },
    heading: {
      marginVertical: 10,
      fontSize: 40,
      fontWeight: 'bold',
      color: 'red',
      marginBottom: 5,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      margin: 10,
      justifyContent: 'space-between',
      backgroundColor: '#1a1a1a'
    },
    textBox: {
      width: '70%',
    },
    myButton: {
      padding: 8,
      width: '24%',
    },
    noData: {
      marginBottom: 220,
      alignSelf: 'center',
      color: 'black',
      fontSize: 25,
    },
  });
  
  export default darkMode;