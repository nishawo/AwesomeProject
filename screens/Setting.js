import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../app-permission';

export const Setting = () => {
  // useEffect(() => {
  //   const granted = checkLocationPermission();
  //   if (!granted) {
  //     const gave = requestLocationPermission();
  //     if (gave) {
  //       console.log('You can use the camera');
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //   }
  //   console.log('first');
  // }, []);
  return (
    <View>
      <Text>settings</Text>
    </View>
  );
};
