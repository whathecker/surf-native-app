import navigationRef from "./navigationRef";
import secureStorage from "./secureStorage";

function handleAuthError(): void {
  secureStorage.removeValue("token");
  navigationRef.resetRoot("Auth");
}

export default handleAuthError;
