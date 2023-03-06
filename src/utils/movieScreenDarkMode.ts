import { StyleSheet } from 'react-native';

const darkMode = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: "#1a1a1a",
      alignItems: 'center'
    },
    poster: {
      height: 400,
      width: 400,
      resizeMode: 'contain'
    },
    title: {
      marginVertical: 10,
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 5,
      textAlign: 'center',
    },
    yearAndGenre: {
      fontSize: 20,
      color: "white",
      marginBottom: 4
    },
    plot: {
      fontSize: 16,
      color: "white",
      textAlign: "center"
    },
  });
  
  export default darkMode;