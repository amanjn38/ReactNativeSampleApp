import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import OtherScreen1 from './screens/WebView';
import OtherScreen2 from './screens/Screen3';
import WebViewScreen from './screens/WebViewScreen';

export type RootStackParamList = {
  Home: undefined;
  Tabs: undefined;
  WebView: undefined;
};

export type TabParamList = {
  Main: undefined;
  Other1: undefined;
  Other2: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Other1" component={OtherScreen1} />
      <Tab.Screen name="Other2" component={OtherScreen2} />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="WebView" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
