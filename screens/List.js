/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  PermissionsAndroid,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../app-permission';
import {Button} from 'react-native-paper';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const flatListData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28batht',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63hthtr',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72ghgfh',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28barer',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63nb',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72nbn',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28badf',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63fefe',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
// const getItemCount = _data => flatListData?.length;

const List = () => {
  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);

  const fetchPermission = async () => {
    const granted = await checkLocationPermission();
    console.log('granted', granted);
    if (!granted) {
      const gave = await requestLocationPermission();
      if (gave) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    }
  };

  useEffect(() => {
    fetchPermission();
    console.log('first');
  }, []);

  const proceed = () => {
    alert('You can use the Camera');
  };

  const onPress = async () => {
    // We need to ask permission for Android only
    if (Platform.OS === 'android') {
      // Calling the permission function
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Example App Camera Permission',
          message: 'Example App needs access to your camera',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission Granted
        proceed();
      } else {
        // Permission Denied
        alert('CAMERA Permission Denied');
      }
    } else {
      proceed();
    }
  };

  const onPressLocation = async () => {
    // We need to ask permission for Android only
    if (Platform.OS === 'android') {
      // Calling the permission function
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App Camera Permission',
          message: 'Example App needs access to your camera',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission Granted
        proceed();
      } else {
        // Permission
        alert('CAMERA Permission Denied');
      }
    } else {
      proceed();
    }
  };

  return (
    <>
      <Button
        onPress={() => {
          onPressLocation();
        }}>
        ask for permission
      </Button>
      <Button onPress={onPress}>
        <Text style={styles.textStyle}>Ask Permission for Camera</Text>
      </Button>
      {/* <SafeAreaView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <StatusBar hidden={true} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <TouchableHighlight
              style={styles.sectionContainer}
              onPress={() => {
                console.log('first');
              }}>
              <Text style={{fontFamily: 'Poppins-Bold'}}>
                TouchableHighlight
              </Text>
            </TouchableHighlight>
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => {
                console.log('first');
              }}>
              <Text>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableNativeFeedback
              style={styles.sectionContainer}
              onPress={() => {
                console.log('first');
              }}>
              <Text>TouchableNativeFeedback</Text>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </SafeAreaView>

      <FlatList
        data={flatListData}
        renderItem={({item}) => {
          return <Text style={styles.sectionTitle}>{item.title}</Text>;
        }}
        keyExtractor={item => item.id}
      />

      <VirtualizedList
        data={flatListData}
        initialNumToRender={4}
        getItemCount={getItemCount}
        getItem={(data, index) => data[index]}
        renderItem={({item}) => {
          return <Text style={styles.sectionTitle2}>{item?.title}</Text>;
        }}
        keyExtractor={item => item?.id}
      />

      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <TouchableHighlight
              style={styles.sectionContainer}
              onPress={() => {
                console.log('first');
              }}>
              <Text>TouchableHighlight</Text>
            </TouchableHighlight>
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => {
                console.log('first');
              }}>
              <Text>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableNativeFeedback
              style={styles.sectionContainer}
              onPress={() => {
                console.log('first');
              }}>
              <Text>TouchableNativeFeedback</Text>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
    backgroundColor: 'orange',
    margin: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    padding: 5,
    margin: 2,
    backgroundColor: 'yellow',
  },
  sectionTitle2: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    padding: 5,
    margin: 2,
    backgroundColor: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default List;
