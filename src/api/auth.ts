/* eslint-disable @typescript-eslint/no-unused-vars */
import * as AuthSession from "expo-auth-session";
import config from "../config";
import {
  getQueryString,
  getUriEncodedPayload,
  createCodeChallenge,
  getApiError,
} from "../utils";
import axios from "axios";
import { axiosSurf } from "./instances";

type AuthToken = {
  authToken: string;
};

type OAuthResult = {
  verifier: string;
  code: string;
  redirectUrl: string;
};

const auth0ClientId = config.auth0ClientId;
const auth0Domain = config.auth0Domain;

const handleOAuth = async (idp: string): Promise<OAuthResult> => {
  try {
    const { verifier, codeChallenge } = await createCodeChallenge();
    const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });

    const authUrl =
      `${auth0Domain}/authorize` +
      getQueryString({
        client_id: auth0ClientId,
        audience: "https://surf-api.com",
        scope: "openid profile email offline_access read:surfProfile",
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
        redirectUrl: redirectUrl,
      });
    } else {
      return Promise.reject("login failed");
    }
  } catch (error) {
    return Promise.reject("error during login");
  }
};

const getAuthToken = async (
  authCode: string,
  verifier: string,
  redirectUrl: string,
): Promise<AuthToken> => {
  try {
    const payload = {
      grant_type: "authorization_code",
      client_id: auth0ClientId, // TODO: move it to env var
      code_verifier: verifier,
      code: authCode,
      redirect_uri: `${redirectUrl}/callback`,
    };

    const response = await axios.request({
      method: "POST",
      url: `${auth0Domain}/oauth/token`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: getUriEncodedPayload(payload),
    });

    const token: string = response.data.access_token;

    return Promise.resolve({ authToken: token });
  } catch (error) {
    return Promise.reject(error);
  }
};

const clearAuthSession = async (): Promise<string> => {
  try {
    await axios.request({
      method: "GET",
      url: `${auth0Domain}/v2/logout${getQueryString({
        client_id: auth0ClientId,
      })}`,
    });
    return Promise.resolve("Success");
  } catch (error) {
    return Promise.reject(error);
  }
};

const checkTokenValidity = async (token: string): Promise<string> => {
  try {
    await axiosSurf.get("/token", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return Promise.resolve("OK");
  } catch (error) {
    const apiError = getApiError(error.message);
    return Promise.reject(apiError);
  }
};

export default {
  handleOAuth,
  getAuthToken,
  clearAuthSession,
  checkTokenValidity,
};
