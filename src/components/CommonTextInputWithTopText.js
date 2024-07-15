import React from 'react';
import {Text, TextInput, View} from 'react-native';

function CommonTextInputWithTopText({title, keyboardType = 'default'}) {
  const [data, onChangeData] = React.useState('');

  return (
    <View>
      <Text
        style={{
          textAlign: 'left',
          fontFamily: 'Cochin',
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          marginHorizontal: 10,
          marginTop: 30,
        }}>
        {title}
      </Text>

      <TextInput
        onChangeText={onChangeData}
        value={data}
        maxLength={20}
        numberOfLines={1}
        style={{
          borderRadius: 5,
          borderColor: 'black',
          borderWidth: 1,
          marginTop: 10,
          marginHorizontal: 10,
          paddingHorizontal: 10,
        }}
        placeholder={title}
        placeholderTextColor="black"
        keyboardType={keyboardType}></TextInput>
    </View>
  );
}

export default CommonTextInputWithTopText;
