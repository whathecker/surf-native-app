import { Platform } from "react-native";

function shouldDisplayAppleSignin(): boolean {
  const os = Platform.OS;
  const version = parseInt(Platform.Version as string, 10);

  if (os === "ios" && version >= 13) {
    return true;
  } else {
    return false;
  }
}

export default shouldDisplayAppleSignin;
