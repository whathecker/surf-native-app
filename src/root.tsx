import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "./context/auth-context";

import { LoginStackParamList } from "./types/route-params";
import { HomeScreen, SignUpScreen, SignInScreen } from "./screens";

const Tab = createBottomTabNavigator();
const LoginStack = createStackNavigator<LoginStackParamList>();

const LoginNav: React.FunctionComponent = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <LoginStack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
    </LoginStack.Navigator>
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
  return <>{authContext.state.token ? <UserNav /> : <LoginNav />}</>;
};

export default Root;
