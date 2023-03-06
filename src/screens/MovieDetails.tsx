import {StyleSheet, Text, View, Image, Appearance} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationParamList} from '../routes/StackNavigation';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import darkMode from '../utils/movieScreenDarkMode';

export default function MovieDetail() {
  const route =
    useRoute<RouteProp<NativeStackNavigationParamList, 'MovieDetails'>>();
  const {data} = route.params;
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <View style={theme === 'light' ? styles.container : darkMode.container}>
      <Image
        style={styles.poster}
        source={{
          uri:
            data.Poster !== 'N/A'
              ? data.Poster
              : 'https://mcdn.wallpapersafari.com/medium/62/65/WL5UeH.jpg',
        }}
      />
      <Text style={theme === 'light' ? styles.title : darkMode.title}>
        {data.Title}
      </Text>
      <Text
        style={theme === 'light' ? styles.yearAndGenre : darkMode.yearAndGenre}>
        Year of Realease: {data.Year}
      </Text>
      <Text
        style={theme === 'light' ? styles.yearAndGenre : darkMode.yearAndGenre}>
        Genre: {data.Genre}
      </Text>
      <Text style={theme === 'light' ? styles.plot : darkMode.plot}>
        {data.Plot}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  poster: {
    height: 400,
    width: 400,
    resizeMode: 'contain',
  },
  title: {
    marginVertical: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    textAlign: 'center',
  },
  yearAndGenre: {
    fontSize: 20,
    color: 'black',
    marginBottom: 4,
  },
  plot: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});
