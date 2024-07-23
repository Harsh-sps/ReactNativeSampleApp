import React, {useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import CommonTextInputWithTopText from '../components/CommonTextInputWithTopText.js';
import CommonButton from '../components/CommonButton.js';
import CommonImage from '../components/CommonImage.js';

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: 'white',
        // flex:1, //Makes the view take up the whole screen
        justifyContent: 'center', // Centers the content vertically
        alignContent: 'center',
      }}>
      <CommonImage path={require('../assets/knife.png')} height={100} width={100}></CommonImage>

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
        title={'Enter username'}
        keyboardType="default">
        onChangeData =
        {value => {
          setUsername(value);
        }}
        data = {username}
      </CommonTextInputWithTopText>

      <CommonTextInputWithTopText
        title={'Enter password'}
        keyboardType="default"
        onChangeData={value => {
          setPassword(value);
        }}
        data={password}></CommonTextInputWithTopText>

      <CommonButton
        title={'LOGIN'}
        onButtonPress={()=> props.navigation.navigate('Home')}></CommonButton>
    </View>
  );
};

export default LoginScreen;
