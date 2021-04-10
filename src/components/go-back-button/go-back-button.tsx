import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Icon } from "../../styles";
import { navigationRef } from "../../utils";

const GoBackButton: React.FC = () => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigationRef.goBack();
      }}
    >
      <Image
        style={styles.goBackIcon}
        source={require("../../../assets/icons/generic/arrow.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 55,
    marginLeft: 20,
  },
  goBackIcon: {
    ...Icon.geneticIconMedium,
  },
});

export default GoBackButton;
