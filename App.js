import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from './components/DetailsScreen';
import { HomeScreen } from './components/HomeScreen';
import { CameraScreen } from './components/CameraScreen';



function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={(HomeScreen)} options={{ title: 'My home' }} />
        <Stack.Screen name="Details" component={(DetailsScreen)} />
        <Stack.Screen name="Camera" component={(CameraScreen)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
