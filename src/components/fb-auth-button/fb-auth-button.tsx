/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { Typography, Icon, Container } from "../../styles";

const FacebookAuthButton: React.FC = () => {
  const [_request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "1098396833976872",
    responseType: ResponseType.Code,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
    }
  }, [response]);

  return (
    <TouchableOpacity
      onPress={() => {
        promptAsync();
      }}
      style={styles.authButtonFacebook}
    >
      <View style={styles.iconContainer}>
        <Image
          style={styles.brandIcon}
          source={require("../../../assets/icons/auth-icons/facebook.png")}
        />
      </View>
      <Text style={styles.buttonText}>{`Sign Up with Facebook`}</Text>
    </TouchableOpacity>
  );
};

const authButtonStyle = {
  ...Container.flexStartContainer,
  width: "100%",
  paddingTop: 18,
  paddingBottom: 18,
  borderRadius: 12,
};

const styles = StyleSheet.create({
  authButton: {
    ...authButtonStyle,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  authButtonFacebook: {
    ...authButtonStyle,
    backgroundColor: "blue",
  },
  iconContainer: {
    marginRight: 35,
  },
  brandIcon: {
    ...Icon.authBrandIcon,
    marginLeft: 20,
  },
  buttonText: {
    ...Typography.p,
    color: "white",
  },
});

export default FacebookAuthButton;
