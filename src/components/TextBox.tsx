import React from 'react';
import {StyleSheet, TextInput, ViewStyle} from 'react-native';

type TextBoxProps = {
  placeholder: string;
  placeholderColor: string;
  value: string;
  style: ViewStyle;
  onChangeText: (active: string) => void;
};
const TextBox = (props: TextBoxProps) => {
  return (
    <TextInput
      style={{...styles.TextBox, ...props.style}}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderColor}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

export default TextBox;

const styles = StyleSheet.create({
  TextBox: {
    backgroundColor: 'white',
    color: 'black',
    padding: 6,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'black',
    fontSize: 18,
    paddingHorizontal: 10,
    width: '100%',
  },
});
