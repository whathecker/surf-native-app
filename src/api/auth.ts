type AuthToken = {
  authToken: string;
};

const getAuthToken = async (authcode: string): Promise<AuthToken> => {
  try {
    return Promise.resolve({ authToken: authcode + "_success_token" });
  } catch (e) {
    return Promise.reject("error");
  }
};

export default { getAuthToken };
