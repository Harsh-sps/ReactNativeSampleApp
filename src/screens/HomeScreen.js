import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';

const PhotosData = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MXwxfGFsbHwxfHx8fHx8Mnx8MTcyMTI5OTIwN3w&ixlib=rb-4.0.3&q=85',
    description: 'a-woman-sitting-in-front-of-a-laptop-computer-hwTaZXO727M',
  },

  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1718839932371-7adaf5edc96a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MHwxfGFsbHwyfHx8fHx8Mnx8MTcyMTI5OTIwN3w&ixlib=rb-4.0.3&q=85',
    description: 'a-beach-towel-hat-and-sunglasses-on-the-sand-DQLEFBUHiVs',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1721265576553-e7f8242fc915?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MHwxfGFsbHwzfHx8fHx8Mnx8MTcyMTI5OTIwN3w&ixlib=rb-4.0.3&q=85',
    description:
      'a-mountain-range-with-snow-covered-mountains-in-the-background-575OvGrdfr8',
  },
  {
    id: '4',
    imageUrl:
      'https://images.unsplash.com/photo-1721265250302-c02ea398a73c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MHwxfGFsbHw0fHx8fHx8Mnx8MTcyMTI5OTIwN3w&ixlib=rb-4.0.3&q=85',
    description: 'a-couple-of-lights-that-are-on-a-wall-1pe4Tz9mBL4',
  },
  {
    id: '5',
    imageUrl:
      'https://images.unsplash.com/photo-1721223818837-ce474fae0e38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MHwxfGFsbHw1fHx8fHx8Mnx8MTcyMTI5OTIwN3w&ixlib=rb-4.0.3&q=85',
    description: 'a-truck-is-parked-in-the-middle-of-a-forest-2I0dlQxrdrg',
  },
  {
    id: '6',
    imageUrl:
      'https://images.unsplash.com/photo-1719937206491-ed673f64be1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MXwxfGFsbHw2fHx8fHx8Mnx8MTcyMTI5OTIwN3w&ixlib=rb-4.0.3&q=85',
    description: 'a-woman-taking-a-picture-of-a-rock-with-a-camera-hVXF42obfYY',
  },

  {
    id: '7',
    imageUrl:
      'https://images.unsplash.com/photo-1721265250424-a2ad2f1efcf1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MHwxfGFsbHw3fHx8fHx8Mnx8MTcyMTI5OTIwN3w&ixlib=rb-4.0.3&q=85',
    description: 'a-camera-attached-to-a-tripod-attached-to-a-wall-v6hCzuOSk1M',
  },

  {
    id: '8',
    imageUrl:
      'https://images.unsplash.com/photo-1721265250103-126ebf3ed4f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MHwxfGFsbHw4fHx8fHx8Mnx8MTcyMTI5OTIwN3w&ixlib=rb-4.0.3&q=85',
    description: 'a-view-of-a-building-through-a-window-ae0S6AeHcdQ',
  },

  {
    id: '9',
    imageUrl:
      'https://images.unsplash.com/photo-1721143571164-06550363f6d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MHwxfGFsbHw5fHx8fHx8Mnx8MTcyMTI5OTIwN3w&ixlib=rb-4.0.3&q=85',
    description:
      'a-large-building-with-two-red-chairs-in-front-of-it-AjYVoqmnSbA',
  },
  {
    id: '10',
    imageUrl:
      'https://images.unsplash.com/photo-1721162720740-cdc684dc8eea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDQ4OTl8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MjEyOTkyMDd8&ixlib=rb-4.0.3&q=85',
    description: 'a-plate-of-food-on-a-wooden-table-9SeBcBUKWJM',
  },
];

const Item = ({imageUrl, onPress, itemStyle}) => {
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity style={itemStyle} onPress={onPress}>
      <View style={styles.imageContainer}>
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
        <Image
          style={styles.image}
          source={{uri: imageUrl}}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}></Image>
      </View>
    </TouchableOpacity>
  );
};

const HorizontalList = ({data, navigation}) => {

  return(<View style={styles.topContainer}>
    <FlatList
      horizontal
      data={data}
      renderItem={({item}) => (
        <Item
          imageUrl={item.imageUrl}
          onPress={() => {
            navigation.navigate('Detail', {item});
          }}
          itemStyle={styles.horizontalItem}></Item>
      )}
      keyExtractor={item => item.id}></FlatList>
  </View>)
  
};

const VerticalList = ({data, navigation}) => {
 return( <View style={styles.bottomContainer}>
  <FlatList
    data={data}
    renderItem={({item}) => (
      <Item
        imageUrl={item.imageUrl}
        onPress={() => {
          navigation.navigate('Detail', {item});
        }}
        itemStyle={styles.verticalItem}></Item>
    )}
    keyExtractor={item => item.id}></FlatList>
</View>)
};

const HomeScreen = ({navigation}) => {
  return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Horizontal Items</Text>
        <HorizontalList data={PhotosData} navigation={navigation}></HorizontalList>
        <Text style={styles.title}>Vertical Items</Text>
        <VerticalList data={PhotosData} navigation={navigation}></VerticalList>
      </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.3,
    backgroundColor: 'white',
  },

  bottomContainer: {
    flex: 0.7,
    backgroundColor: 'white',
  },

  verticalItem: {
    marginHorizontal: 10,
    elevation: 100,
    height: 250,
    marginVertical: 5,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
  },
  horizontalItem: {
    marginHorizontal: 10,
    elevation: 5,
    marginVertical: 5,
    borderRadius: 20,
    width: 200,
    backgroundColor: 'white',
  },
  title: {
    marginHorizontal: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
