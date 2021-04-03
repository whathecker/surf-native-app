import * as AuthSession from "expo-auth-session";
import { getQueryString } from "../utils";

type AuthToken = {
  authToken: string;
};

const handleOAuth = async (idp: string): Promise<string> => {
  const auth0ClientId = "M6bdC9X6ACFckrMCBqxlaPK9t4Q1GKiA";
  const auth0Domain = "https://dev-817dakf7.eu.auth0.com";

  try {
    const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });
    const authUrl =
      `${auth0Domain}/authorize` +
      getQueryString({
        client_id: auth0ClientId,
        connection: idp === "google" ? "google-oauth2" : idp,
        response_type: "token",
        redirect_uri: redirectUrl,
      });
    const result = await AuthSession.startAsync({ authUrl });
    if (result.params.access_token) {
      return Promise.resolve(result.params.access_token);
    } else {
      return Promise.reject("login failed");
    }
  } catch (e) {
    return Promise.reject("error during login");
  }
};

const getAuthToken = async (authcode: string): Promise<AuthToken> => {
  try {
    return Promise.resolve({ authToken: authcode + "_success_token" });
  } catch (e) {
    return Promise.reject("error");
  }
};

export default { handleOAuth, getAuthToken };
