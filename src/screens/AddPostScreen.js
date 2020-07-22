import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActionSheetIOS } from 'react-native';
import Input from '../components/Input';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Styles';

import Fire from '../utils/Firebase';

import { selectPhoto, takePhoto } from '../utils/getPhoto';

export default function AddPostScreen({ navigation }) {
  const [text, setText] = useState('');
  const [image, setImage] = useState();
  const [sendingPost, setSendingPost] = useState(false);


  const handlePost = async () => {
    setSendingPost(true);

    Fire.shared.addPost({ text: text.trim(), image })
    setText('');
    setSendingPost(false);
  }

  const handlePhoto = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ["Cancel", "Select photo", "Take photo"],
      cancelButtonIndex: 0,
    },
      async buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setImage(await selectPhoto());
        } else if (buttonIndex === 2) {
          setImage(await takePhoto());
        }
      }
    );
  };
  /*
  const handlePost = () => {
    setSendingPost(true);

    Fire.shared.addPost({ text: text.trim(), localUri: image })
    setSendingPost(true);
  };
  */

  return (
    <>
      <Header
        title='Add a Post!'
        currentScreen={AddPostScreen}
        navigation={navigation}
      />
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView style={styles.container}>
          <Input
            title='Send your art!'
            value={text}
            onChangeText={setText}
            multiline
            maxLength={4}
          />

          {sendingPost ? (
            <Text style={{ alignSelf: 'center', color: 'red' }}>Sending post!</Text>
          ) : (
              <Text style={{ alignSelf: 'center', color: 'red' }}></Text>
            )}

          <TouchableOpacity style={{ alignSelf: 'center', paddingTop: 20 }} onPress={handlePhoto}>
            <Ionicons name='ios-add' size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePost}>
            <Text style={styles.buttonText}>Send Art!</Text>
          </TouchableOpacity>

          <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
            <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }}></Image>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 24,
  },
  text: {
    padding: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },

  buttonContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  },
});