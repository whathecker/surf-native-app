import * as SecureStore from "expo-secure-store";

async function save(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

async function getValue(key: string): Promise<string | null> {
  const result = await SecureStore.getItemAsync(key);

  if (result) {
    return result;
  } else {
    return null;
  }
}

async function removeValue(key: string): Promise<void> {
  await SecureStore.deleteItemAsync(key);
}

export default { save, getValue, removeValue };
