import { SurfProfile } from "../types/surf-profile";

const getSurfProfile = async (
  expectedResult: boolean,
): Promise<SurfProfile> => {
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
