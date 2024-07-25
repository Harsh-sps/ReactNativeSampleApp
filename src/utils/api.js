import React from 'react';

const BASE_URL = 'https://api.unsplash.com';

export const fetchPhotos = async () => {
  const params = {
    client_id: 'd-_yFmc2oShWIK_nCBtlgyq0ZXZh-MnWiL2G58pb1C8',
  };

  // Building query string
  const queryString = Object.keys(params).map(
    key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]),
  );

  try {
    const response = await fetch(BASE_URL + '/photos?' + queryString);
    if (!response.ok) {
      console.log('Network response was not ok.');
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPhotoBasedOnId = async photoId => {
  const params = {
    client_id: 'd-_yFmc2oShWIK_nCBtlgyq0ZXZh-MnWiL2G58pb1C8',
  };

  // Building query string
  const queryString = Object.keys(params).map(
    key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]),
  );

  try {
    const response = await fetch(
      BASE_URL + '/photos/' + photoId + '?' + queryString,
    );
    if (!response.ok) {
      console.log('Network response was not ok.');
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
