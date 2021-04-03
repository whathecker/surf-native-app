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

const resetRoot = (routeName: string): void => {
  navigator!.resetRoot({
    index: 0,
    routes: [{ name: routeName }],
  });
};

export default { setNavigator, navigate, resetRoot };
