import * as Crypto from "expo-crypto";
import * as Random from "expo-random";
import * as base64 from "base64-js";
import { CryptoEncoding } from "expo-crypto";

function trimmBase64String(str: string): string {
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

export default async (): Promise<string> => {
  const bytes = base64.fromByteArray(Random.getRandomBytes(32));

  const verifier = trimmBase64String(bytes);

  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    verifier,
    { encoding: CryptoEncoding.BASE64 },
  );

  return Promise.resolve(trimmBase64String(digest));
};
