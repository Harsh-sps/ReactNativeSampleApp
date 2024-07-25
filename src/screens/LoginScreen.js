import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonTextInputWithTopText from '../components/CommonTextInputWithTopText.js';
import CommonButton from '../components/CommonButton.js';
import CommonImage from '../components/CommonImage.js';

const LoginScreen = props => {
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
      <CommonImage
        path={require('../assets/skull.png')}
        height={100}
        width={100}></CommonImage>

      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Cochin',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20,
        }}>
        Softprodigy App!
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
        onButtonPress={() => props.navigation.navigate('Home')}
        buttonStyle={styles.loginButtonStyle}
        buttonTextStyle={styles.buttonTextStyle}></CommonButton>

      <CommonButton
        title={'MOVE TO DASHBOARD'}
        onButtonPress={() => props.navigation.navigate('Dashboard')}
        buttonStyle={styles.dashboardButtonStyle}
        buttonTextStyle={styles.buttonTextStyle}></CommonButton>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonStyle: {
    marginHorizontal: 10,
    backgroundColor: '#CD9C2B',
    marginTop: 50,
    padding: 15,
    borderRadius: 5,
    elevation: 5,
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  dashboardButtonStyle: {
    marginHorizontal: 10,
    backgroundColor: '#44AD28',
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    elevation: 5,
  },
});

export default LoginScreen;
