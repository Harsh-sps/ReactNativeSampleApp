import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {fetchPhotos} from '../utils/api';

const DashboardScreen = ({navigation}) => {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    const fetchAndSetPhotos = async () => {
      try {
        const data = await fetchPhotos();
        setPhotos(data); // Update state with fetched photos array
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchAndSetPhotos(); // Call the function to fetch photos when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Photos from Unsplash</Text>
      <FlatList
        data={photos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.photoContainer}
            onPress={() => {
              navigation.navigate('PhotosDetail', {item});
            }}>
            <Image source={{uri: item.urls.small}} style={styles.photo} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    alignSelf: 'center',
    fontFamily: 'Cochin',
  },
  photoContainer: {
    marginBottom: 10,
  },
  photo: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    elevation: 10,
  },
});

export default DashboardScreen;
