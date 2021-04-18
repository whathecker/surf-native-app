/* eslint-disable @typescript-eslint/no-unused-vars */
import * as AuthSession from "expo-auth-session";
import { getQueryString } from "../utils";
import { createCodeChallenge } from "../utils";

type AuthToken = {
  authToken: string;
};

type OAuthResult = {
  verifier: string;
  code: string;
};

const handleOAuth = async (idp: string): Promise<OAuthResult> => {
  const auth0ClientId = "M6bdC9X6ACFckrMCBqxlaPK9t4Q1GKiA";
  const auth0Domain = "https://dev-817dakf7.eu.auth0.com";

  try {
    const { verifier, codeChallenge } = await createCodeChallenge();
    const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });

    const authUrl =
      `${auth0Domain}/authorize` +
      getQueryString({
        client_id: auth0ClientId,
        audience: "https://surf-api.com",
        scope: "read:surfProfile",
        connection: idp === "google" ? "google-oauth2" : idp,
        response_type: "code",
        code_challenge: codeChallenge,
        code_challenge_method: "S256",
        redirect_uri: redirectUrl,
      });

    const result = await AuthSession.startAsync({ authUrl });
    if (result.params.code) {
      return Promise.resolve({
        verifier: verifier,
        code: result.params.code,
      });
    } else {
      return Promise.reject("login failed");
    }
  } catch (error) {
    return Promise.reject("error during login");
  }
};

const getAuthToken = async (
  authcode: string,
  _verifier: string,
): Promise<AuthToken> => {
  try {
    // Call cloud function here!!
    return Promise.resolve({ authToken: authcode + "_success_token" });
  } catch (error) {
    return Promise.reject("error");
  }
};

export default { handleOAuth, getAuthToken };
