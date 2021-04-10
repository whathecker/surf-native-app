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
import { GoBackButton } from "./components";

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

const GoBackButtonInHeader = () => <GoBackButton />;

const SurfProfileQuestionsNav: React.FunctionComponent = () => {
  const questionScreenOptions = {
    title: "",
    headerTransparent: true,
    headerLeft: GoBackButtonInHeader,
  };
  return (
    <SurfProfileQuestionsStack.Navigator>
      <SurfProfileQuestionsStack.Screen
        name="SurfLevel"
        options={{ headerShown: false }}
        component={SurfLevelScreen}
      />

      <SurfProfileQuestionsStack.Screen
        name="BeginnerLevelQuestionsOne"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="BeginnerLevelQuestionsTwo"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="BeginnerLevelQuestionsThree"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="BeginnerLevelQuestionsFour"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />

      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsOne"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsTwo"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsThree"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsFour"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="IntermediateLevelQuestionsFive"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />

      <SurfProfileQuestionsStack.Screen
        name="AdvancedLevelQuestionsOne"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="AdvancedLevelQuestionsTwo"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="AdvancedLevelQuestionsThree"
        options={questionScreenOptions}
        component={SurfLevelQuestionsScreen}
      />
      <SurfProfileQuestionsStack.Screen
        name="AdvancedLevelQuestionsFour"
        options={questionScreenOptions}
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
