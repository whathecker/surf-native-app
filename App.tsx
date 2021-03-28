import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, SignUpScreen } from './src/screens';

const isLogin: boolean = false; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LoginNav:React.FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const UserNav: React.FunctionComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      {isLogin? <UserNav /> : <LoginNav />}
    </NavigationContainer>
  );
}
