/* eslint-disable no-console */
import React from "react";
import * as Google from "expo-auth-session/providers/google";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { Typography, Icon, Container } from "../../styles";

const GoogleAuthButton: React.FC = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "961203598586-1hm9er5ircd8t8uat7ute86c54grn4j0.apps.googleusercontent.com",
    //iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    //androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    //webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);

  return (
    <TouchableOpacity
      disabled={!request}
      style={styles.authButton}
      onPress={() => {
        promptAsync();
      }}
    >
      <View style={styles.iconContainer}>
        <Image
          style={styles.brandIcon}
          source={require("../../../assets/icons/auth-icons/google.png")}
        />
      </View>
      <Text style={styles.buttonTextBlk}>{`Sign Up with Google`}</Text>
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
  iconContainer: {
    marginRight: 35,
  },
  brandIcon: {
    ...Icon.authBrandIcon,
    marginLeft: 20,
  },
  buttonTextBlk: {
    ...Typography.p,
    color: "black",
  },
});

export default GoogleAuthButton;
