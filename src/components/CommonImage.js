import React from 'react';
import {Image} from 'react-native';

function CommonImage({
  path = require('../assets/knife.png'),
  height = 100,
  width = 100,
}) {
  return (
    <Image
      source={path}
      style={{
        width: width,
        height: height,
        alignSelf: 'center',
        marginTop: 50,
      }}></Image>
  );
}

export default CommonImage;
