import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {fetchPhotoBasedOnId} from '../utils/api';

const PhotosDetailScreen = ({navigation, route}) => {
  const item = route.params.item;

  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotoById = async () => {
      try {
        const data = await fetchPhotoBasedOnId(item.id);
        setResponse(data); // Update state with fetched photos array
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotoById(); // Call the function to fetch photos when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  console.log(response);

  if (loading || !response) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.contentContainer}>
      <Image
        source={{uri: response.urls.small}}
        style={styles.topContainer}></Image>

      <Text style= {styles.descriptionStyle}>
        {response.alt_description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    width: '100%',
    flex: 0.5,
  },
  bottomContainer: {
    width: '100%',
    flex: 0.5,
  },
  descriptionStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    marginHorizontal: 10
  }
});

export default PhotosDetailScreen;
