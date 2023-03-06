import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type MovieCardProps = {
  title: string;
  type: string;
  year: string;
  image: string;
  style?: any;
  color: string | null | undefined;
  onPress: () => void;
};
const MovieCard = (props: MovieCardProps) => {
  const color = props.color === 'dark' ? 'white' : 'black';
  return (
    <TouchableOpacity style={styles.Container} onPress={props.onPress}>
      <Image
        source={{
          uri:
            props.image !== 'N/A'
              ? props.image
              : 'https://mcdn.wallpapersafari.com/medium/62/65/WL5UeH.jpg',
        }}
        style={styles.posterImage}
      />
      <View style={{...styles.textContainer}}>
        <Text style={{...styles.movieTitle, color: color}}>{props.title} </Text>
        <Text style={{...styles.typeAndYear, color: color}}>
          Type: {props.type}
        </Text>
        <Text style={{...styles.typeAndYear, color: color}}>
          Year of Release : {props.year}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 4,
    padding: 5,
  },
  posterImage: {
    width: 90,
    resizeMode: 'contain',
    height: 90,
    alignSelf: 'center',
  },
  textContainer: {
    width: '70%',
  },
  movieTitle: {
    fontSize: 22,
    color: 'black',
  },
  typeAndYear: {
    fontSize: 17,
    color: 'black',
  },
});
