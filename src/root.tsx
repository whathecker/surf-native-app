import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthStackParamList } from "./types/route-params";
import {
  HomeScreen,
  SignUpScreen,
  SignInScreen,
  ResolveAuthScreen,
  PostAuthScreen,
  SurfLevelScreen,
  SurfLevelQuestionsScreen,
} from "./screens";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator<AuthStackParamList>();
const SurfProfileQuestionsStack = createStackNavigator();

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

const SurfProfileQuestionsNav: React.FunctionComponent = () => {
  return (
    <SurfProfileQuestionsStack.Navigator>
      <SurfProfileQuestionsStack.Screen
        name="SurfLevel"
        options={{ headerShown: false }}
        component={SurfLevelScreen}
      />

      <SurfProfileQuestionsStack.Screen
        name="BeginnerLevelQuestionsOne"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="BeginnerLevelQuestionsTwo"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="BeginnerLevelQuestionsThree"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="BeginnerLevelQuestionsFour"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />

      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsOne"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsTwo"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsThree"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsFour"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsFive"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />

      <SurfProfileQuestionsStack.Screen
        name="AdvancedLevelQuestionsOne"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="AdvancedLevelQuestionsTwo"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="AdvancedLevelQuestionsThree"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="AdvancedLevelQuestionsFour"
        options={{ headerShown: false }}
        component={SurfLevelQuestionsScreen}
      />
    </SurfProfileQuestionsStack.Navigator>
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
    <RootStack.Navigator mode="modal" initialRouteName="ResolveAuth">
      <RootStack.Screen
        name="ResolveAuth"
        options={{ headerShown: false }}
        component={ResolveAuthScreen}
      />
      <RootStack.Screen
        name="Auth"
        options={{ headerShown: false }}
        component={AuthNav}
      />
      <RootStack.Screen
        name="PostAuth"
        options={{ headerShown: false }}
        component={PostAuthScreen}
      />
      <RootStack.Screen
        name="SurfProfileQuestions"
        options={{ headerShown: false }}
        component={SurfProfileQuestionsNav}
      />
      <RootStack.Screen name="App" component={AppNav} />
    </RootStack.Navigator>
  );
};

export default Root;
