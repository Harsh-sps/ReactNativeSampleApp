import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';

const DetailScreen = ({navigation, route}) => {
  const item = route.params.item;
  console.log(route.params.item.imageUrl);
  const [loading, setLoading] = React.useState(true);
  return (
    <View style={{flex: 1}}>
      {loading && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}> 
          <ActivityIndicator size="large" color="black" />
        </View>
      )}

      <Image
        style={{flex: 1}}
        source={{uri: item.imageUrl}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}></Image>
    </View>
  );
};

export default DetailScreen;
