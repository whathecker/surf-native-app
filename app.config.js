/**
 * Dynamic app config file of expo app
 * This configuration file is loaded build time of JS code
 * More info: https://docs.expo.io/workflow/configuration/#app-config
 */

import "dotenv/config";

export default {
  name: "surf-native-app",
  slug: "surf-journal-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    usesAppleSignIn: true,
    bundleIdentifier: "com.koelkast.surfjournalapp",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./assets/images/favicon.png",
  },
  extra: {
    auth0ClientId: process.env.AUTO0_CLIENT_ID,
    auth0Domain: process.env.AUTO0_DOMAIN,
  },
};
