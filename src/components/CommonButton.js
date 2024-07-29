import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

function CommonButton({title, onButtonPress, buttonStyle, buttonTextStyle}) {
  return (
    <TouchableOpacity
      style={buttonStyle}
      activeOpacity={0.8}
      onPress={onButtonPress}>
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>   
  );
}

export default CommonButton;
