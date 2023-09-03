import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DeviceProvider } from './src/context/DeviceContext';

import HomeScreen from './src/screens/StackNavigator/HomeScreen';
import ProfilScreen from './src/screens/TabsNavigator/ProfilScreen';
import Welcome from './src/screens/StackNavigator/Welcome';
import CategoriyDetailScreen from './src/screens/StackNavigator/CategoriyDetailScreen';
import HadeethDetailScreen from './src/screens/StackNavigator/HadeethDetailScreen';

//Navigation
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ProfilScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <DeviceProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CategoryDetail" component={CategoriyDetailScreen} options={{ headerShown: true, title: 'Kategori Listesi' }} />
          <Stack.Screen name="HadeethDetail" component={HadeethDetailScreen} options={{ headerShown: true, title: 'Hadis Detayı' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DeviceProvider>
  );
};

export default App;
