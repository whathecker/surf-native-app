import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { SurfLevelQuestionsStackParamList } from "../types/route-params";
import { View, Text, Button, StyleSheet } from "react-native";
import { Container, Typography } from "../styles";

type SurfLevelQuestionsScreenNavProps = StackNavigationProp<
  SurfLevelQuestionsStackParamList,
  "SurfLevelQuestions"
>;
type SurfLevelQuestionsScreenRouteProps = RouteProp<
  SurfLevelQuestionsStackParamList,
  "SurfLevelQuestions"
>;

type Props = {
  route: SurfLevelQuestionsScreenRouteProps;
  navigation: SurfLevelQuestionsScreenNavProps;
};

const SurfLevelQuestionScreen: React.FC<Props> = ({
  route,
  navigation,
}: Props) => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>Surf Level Questions Screen</Text>
        <Text style={styles.headerText}>{route.params?.selectedLevel}</Text>
        <Button
          title="Go Back"
          color="blue"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...Container.centerAlignedContainerVertical,
    flex: 1,
  },
  headerText: {
    ...Typography.h1,
  },
});

export default SurfLevelQuestionScreen;
