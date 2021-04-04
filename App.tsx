import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./src/context/auth-context";
import { SurfProfileContextProvider } from "./src/context/surf-profile-context";
import Root from "./src/root";
import { navigationRef } from "./src/utils";

export default function App() {
  return (
    <AuthContextProvider>
      <SurfProfileContextProvider>
        <NavigationContainer
          ref={(navigator) => {
            navigationRef.setNavigator(navigator!);
          }}
        >
          <Root />
        </NavigationContainer>
      </SurfProfileContextProvider>
    </AuthContextProvider>
  );
}
