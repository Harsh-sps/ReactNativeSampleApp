import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

function CommonButton({title, onButtonPress}) {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 10,
        backgroundColor: '#f194ff',
        marginTop: 50,
        padding: 15,
        borderRadius: 5,
      }}
      activeOpacity={0.8}
      onPress={onButtonPress}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 16,
          fontFamily: 'Cochin',
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CommonButton;
