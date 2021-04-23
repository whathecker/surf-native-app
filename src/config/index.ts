import Constants from "expo-constants";

let auth0ClientId = "";

if (Constants.manifest.extra && Constants.manifest.extra.auth0ClientId) {
  auth0ClientId = Constants.manifest.extra.auth0ClientId as string;
}

let auth0Domain = "";

if (Constants.manifest.extra && Constants.manifest.extra.auth0Domain) {
  auth0Domain = Constants.manifest.extra.auth0Domain as string;
}

export default {
  auth0ClientId,
  auth0Domain,
};
