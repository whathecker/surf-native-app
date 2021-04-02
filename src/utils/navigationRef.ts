/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  NavigationContainerRef,
  CommonActions,
} from "@react-navigation/native";

let navigator: NavigationContainerRef | null;

const setNavigator = (nav: NavigationContainerRef): void => {
  navigator = nav;
};

const navigate = (
  routeName: string,
  params?: Record<string, unknown>,
): void => {
  navigator!.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
};

export default { setNavigator, navigate };
