const isProfileExist = async (
  userId: string,
): Promise<Record<string, string>> => {
  try {
    return Promise.resolve({ result: "profile_exist", userId });
  } catch (error) {
    return Promise.reject("error");
  }
};

export default { isProfileExist };
