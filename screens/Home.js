import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import List from './List';
import {Setting} from './Setting';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: 'gray',
          },
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="home" size={30} color={focused ? 'green' : 'gray'} />
          ),
        }}
        name="List"
        component={List}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? 'green' : 'gray'}}>settings</Text>
          ),

          tabBarIcon: ({color, size, focused}) => (
            <Icon name="gear" size={30} color={focused ? 'green' : 'gray'} />
          ),
        }}
        component={Setting}
      />
    </Tab.Navigator>
  );
};

export default Home;
