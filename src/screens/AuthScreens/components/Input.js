import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../../Styles';

export default function Input(props) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCapitalize={props.autoCapitalize}
        secureTextEntry={props.secureTextEntry}
        autoFocus={props.autoFocus}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
        maxLength={props.maxLength}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: 'black',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
});