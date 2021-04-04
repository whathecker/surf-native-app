const getSurfProfile = async (
  expectedResult: boolean,
): Promise<Record<string, string | number | null>> => {
  try {
    if (expectedResult) {
      return Promise.resolve({ surfLevelScore: 50 });
    } else {
      return Promise.resolve({ surfLevelScore: null });
    }
  } catch (error) {
    return Promise.reject("error");
  }
};

export default { getSurfProfile };
