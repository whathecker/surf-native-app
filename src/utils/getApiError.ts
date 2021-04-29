import { ApiError } from "../types/errors";

function getApiError(errorMsg: string): ApiError {
  if (
    errorMsg === "Request failed with status code 401" ||
    errorMsg === "Request failed with status code 403"
  ) {
    return { type: "auth", message: errorMsg };
  } else {
    return { type: "generic", message: errorMsg };
  }
}

export default getApiError;
