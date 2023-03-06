import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

type MyButtonProps = {
  title: string;
  style?: any;
  color?: string;
  textColor?: string;
  buttonDisabled?: boolean;
  onPress: () => void;
};

const MyButton = (props: MyButtonProps) => {
  const color = props.buttonDisabled
    ? 'grey'
    : props.color
    ? props.color
    : '#3366ff';
  const textColor = props.textColor ? props.textColor : 'white';
  return (
    <Pressable
      style={({pressed}) => [
        {backgroundColor: color},
        {opacity: pressed && !props.buttonDisabled ? 0.5 : null},
        {...styles.mybutton, ...props.style},
      ]}
      disabled={props.buttonDisabled}
      onPress={props.onPress}>
      <Text style={{...styles.title, color: textColor}}>{props.title}</Text>
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  mybutton: {
    justicyContent: 'center',
    borderRadius: 4,
    padding: 6,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 17,
  },
});
