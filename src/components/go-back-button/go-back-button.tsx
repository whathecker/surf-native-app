import React from "react";
import { Button } from "react-native";
import { navigationRef } from "../../utils";

const GoBackButton: React.FC = () => {
  return (
    <Button
      title="go back"
      color="blue"
      onPress={() => {
        navigationRef.goBack();
      }}
    />
  );
};

export default GoBackButton;
