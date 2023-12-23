import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import List from './screens/List';
import SplashScreen from 'react-native-splash-screen';
const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    async function prepare() {
      try {
        // our api calls will be here.
        new Promise(resolve => setTimeout(resolve, 5000)); // wait for 5 secs
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hide();
      }
    }
    prepare();
  });
  return (
    // <GestureHandlerRootView style={{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Details"
          options={{headerShown: false}}
          component={List}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </GestureHandlerRootView>
  );
};
export default App;
