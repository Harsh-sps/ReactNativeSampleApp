import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, ActivityIndicator} from 'react-native';
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
      <View style={styles.parentContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      </View>
    );
  }

  return (
    <View>
      <Image
        source={{uri: response.urls.small}}
        style={styles.topContainer}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
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
});

export default PhotosDetailScreen;
