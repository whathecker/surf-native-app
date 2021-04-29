import { axiosSurf } from "./instances";
import { SurfProfile, SurfLevelQuestionsHolder } from "../types/surf-profile";
import { secureStorage, getApiError } from "../utils";

const getSurfProfile = async (
  expectedResult: boolean,
): Promise<SurfProfile> => {
  try {
    const token = await secureStorage.getValue("token");

    await axiosSurf.get("/test", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (expectedResult) {
      return Promise.resolve({ surfLevelScore: 50 });
    } else {
      return Promise.resolve({ surfLevelScore: null });
    }
  } catch (error) {
    const apiError = getApiError(error.message);
    return Promise.reject(apiError);
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
    const apiError = getApiError(error.message);
    return Promise.reject(apiError);
  }
};

export default { getSurfProfile, postSurfProfile };
