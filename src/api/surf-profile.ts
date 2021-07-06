import { axiosSurf } from "./instances";
import { SurfProfile, SurfLevelQuestionsHolder } from "../types/surf-profile";
import { secureStorage, getApiError } from "../utils";

const getSurfProfile = async (): Promise<SurfProfile> => {
  try {
    const token = await secureStorage.getValue("token");

    if (!token) {
      throw new Error("Failed to find the auth token");
    }

    const response = await axiosSurf.get("/surfprofile", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      if (!response.data.surfProfile) {
        return Promise.resolve({ surfLevelScore: null });
      }

      const surfProfile: SurfProfile = response.data.surfProfile;
      return Promise.resolve({ surfLevelScore: surfProfile.surfLevelScore });
    } else {
      throw new Error("Failed to fetch surf profile - unknonw status");
    }
  } catch (error) {
    // TODO: error logging required
    const apiError = getApiError(error.message);
    return Promise.reject(apiError);
  }
};

const postSurfProfile = async ({
  selectedSurfLevel,
  questions,
}: SurfLevelQuestionsHolder): Promise<SurfProfile> => {
  try {
    if (!selectedSurfLevel) {
      throw new Error("Select surf level before sending data");
    }

    const token = await secureStorage.getValue("token");

    const payload = {
      selectedSurfLevel,
      questions,
    };

    const response = await axiosSurf.post("/surfprofile", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 201) {
      const surfLevelScore = response.data.surfLevelScore
        ? response.data.surfLevelScore
        : null;

      return Promise.resolve({ surfLevelScore: surfLevelScore });
    } else {
      throw new Error("Failed to create surf profile - unknonw status");
    }
  } catch (error) {
    // TODO: error logging required
    const apiError = getApiError(error.message);
    return Promise.reject(apiError);
  }
};

export default { getSurfProfile, postSurfProfile };
