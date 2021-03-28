import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from './src/context/auth-context';
import Root from './src/root';

export default function App() {
  // try to fetch token at this file
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
