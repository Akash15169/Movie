import {StyleSheet, Text, View, FlatList, Appearance} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackNavigationParamList} from '../routes/StackNavigation';

import TextBox from '../components/TextBox';
import MyButton from '../components/MyButton';
import MovieCard from '../components/MovieCard';
import darkMode from '../utils/homeScreenDarkMode';

const ENDPOINT = 'https://www.omdbapi.com/?';
const API_KEY = 'bee59f57';

const HomeScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<NativeStackNavigationParamList, 'HomeScreen'>
    >();

  const [searchPhrase, setSearchPhrase] = useState('');
  const [moviesData, setMoviesData] = useState([]);
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const buttonPressHandler = () => {
    fetch(`${ENDPOINT}s=${searchPhrase}&apikey=${API_KEY}&page=1`)
      .then(response => response.json())
      .then(res => {
        setMoviesData(res.Search);
      })
      .catch(error => {
        console.log(error);
      });
    console.log('Search button pressed!');
  };

  const movieCardPressHandler = (Id: String) => {
    fetch(`${ENDPOINT}i=${Id}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        navigation.navigate('MovieDetails', {data: json});
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderItem = ({item}) => (
    <MovieCard
      title={item.Title}
      type={item.Type}
      image={item.Poster}
      year={item.Year}
      color={theme}
      onPress={() => {
        movieCardPressHandler(item.imdbID);
        console.log('MovieCard pressed!');
      }}
    />
  );

  return (
    <View style={theme === 'light' ? styles.container : darkMode.container}>
      <FlatList
        ListHeaderComponent={
          <View>
            <Text style={theme === 'light' ? styles.heading : darkMode.heading}>
              MOVIES APP
            </Text>
            <View style={styles.row}>
              <TextBox
                style={styles.textBox}
                placeholder="Search movie, series, episode"
                placeholderColor="grey"
                value={searchPhrase}
                onChangeText={text => {
                  setSearchPhrase(text);
                }}
              />
              <MyButton
                title="SUBMIT"
                style={styles.myButton}
                onPress={buttonPressHandler}
              />
            </View>
          </View>
        }
        data={moviesData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      {moviesData === undefined && (
        <Text style={styles.noData}>No data found! Search again.</Text>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white"
  },
  heading: {
    marginVertical: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
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
