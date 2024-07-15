import React from 'react';
import {
  Alert,
  Text,
  View,
} from 'react-native';
import CommonTextInputWithTopText from '../components/CommonTextInputWithTopText.js';
import CommonButton from '../components/CommonButton.js';
import CommonImage from '../components/CommonImage.js';

function LoginScreen() {
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: 'white',
        // flex:1, //Makes the view take up the whole screen
        justifyContent: 'center', // Centers the content vertically
        alignContent: 'center',
      }}>
      <CommonImage height={100} width={100}></CommonImage>

      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Cochin',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20,
        }}>
        Let's eat!
      </Text>

      <CommonTextInputWithTopText
        title={'Enter username'}></CommonTextInputWithTopText>

      <CommonTextInputWithTopText
        title={'Enter password'}
        keyboardType="default"></CommonTextInputWithTopText>

      <CommonButton
        title={'LOGIN'}
        onButtonPress={() => Alert.alert('Button Pressed')}></CommonButton>
    </View>
  );
}

export default LoginScreen;
