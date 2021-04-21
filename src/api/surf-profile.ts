import { SurfProfile, SurfLevelQuestionsHolder } from "../types/surf-profile";

const getSurfProfile = async (
  expectedResult: boolean,
): Promise<SurfProfile> => {
  try {
    // Mock implementation: update later with actual response from API
    if (expectedResult) {
      return Promise.resolve({ surfLevelScore: 50 });
    } else {
      return Promise.resolve({ surfLevelScore: null });
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

const postSurfProfile = async ({
  selectedSurfLevel,
}: SurfLevelQuestionsHolder): Promise<SurfProfile> => {
  try {
    // Send selectedSurfLevel and questions to backend
    // Receive SurfProfile with surflevelScore as result

    if (!selectedSurfLevel) {
      // What do I do here? throw error?
      throw new Error("Select surf level before sending data");
    }
    return Promise.resolve({ surfLevelScore: 50 });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default { getSurfProfile, postSurfProfile };
