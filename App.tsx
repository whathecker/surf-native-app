import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./src/context/auth-context";
import Root from "./src/root";
import { navigationRef } from "./src/utils"

export default function App() {
  // try to fetch token at this file

  return (
    <AuthContextProvider>
      <NavigationContainer ref={(navigator) => { navigationRef.setNavigator(navigator!)}}>
        <Root />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
