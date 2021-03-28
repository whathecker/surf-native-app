import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "./context/auth-context";

import { HomeScreen, SignUpScreen } from "./screens";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LoginNav: React.FunctionComponent = () => {
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
  );
};

const Root: React.FunctionComponent = () => {
  const authContext = useContext(AuthContext);
  return <>{authContext.token ? <UserNav /> : <LoginNav />}</>;
};

export default Root;
