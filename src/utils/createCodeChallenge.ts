import * as Crypto from "expo-crypto";
import * as Random from "expo-random";
import * as base64 from "base64-js";
import { CryptoEncoding } from "expo-crypto";

function trimmBase64String(str: string): string {
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

type AuthChallenges = {
  verifier: string;
  codeChallenge: string;
};

export default async (): Promise<AuthChallenges> => {
  const bytes = base64.fromByteArray(Random.getRandomBytes(32));

  const verifier = trimmBase64String(bytes);

  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    verifier,
    { encoding: CryptoEncoding.BASE64 },
  );

  return Promise.resolve({
    verifier: verifier,
    codeChallenge: trimmBase64String(digest),
  });
};
