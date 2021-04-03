import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/auth-context";

const HomeScreen: React.FunctionComponent = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <View>
        <Text>Home Screen Screen</Text>
      </View>
      <View>
        <Button title="Sign Out" color="blue" onPress={signOut} />
      </View>
    </>
  );
};

export default HomeScreen;
