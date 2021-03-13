import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Example: React.FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default Example;
