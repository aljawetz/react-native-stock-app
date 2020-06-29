import React from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';

export default function AddPostScreen() {
  const [text, onChangeText] = React.useState('');
  const [resultMessage, setResultMessage] = React.useState(false);

  function onSendPost() {
    if (text.length <= 0) {
      setResultMessage("Can't send empty post!");
      return;
    }
    setResultMessage("Post sent!");
  }


  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Write your post!"
          value={text}
          onChangeText={onChangeText}
          style={styles.body}
          placeholderTextColor='grey'
          underlineColorAndroid="transparent"
          multiline
        />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <Button
          onPress={onSendPost}
          style={styles.button}
          mode="contained">
          SEND
      </Button>
        {resultMessage && <Text style={{ color: "red" }}>{resultMessage}</Text>}
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center"
  },
  InputContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRadius: 20,
  },
  body: {
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'black',
  },
  button: {
    marginTop: 20,
    marginLeft: 200,
    marginRight: 20,
    backgroundColor: "blue",
    elevation: 4,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
});