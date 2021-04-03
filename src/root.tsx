import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { AuthContext } from "./context/auth-context";
import { AuthStackParamList } from "./types/route-params";
import { HomeScreen, SignUpScreen, SignInScreen } from "./screens";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNav: React.FunctionComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <AuthStack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
    </AuthStack.Navigator>
  );
};
const AppNav: React.FunctionComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const Root: React.FunctionComponent = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Auth"
        options={{ headerShown: false }}
        component={AuthNav}
      />
      <RootStack.Screen name="App" component={AppNav} />
    </RootStack.Navigator>
  );
};

export default Root;
