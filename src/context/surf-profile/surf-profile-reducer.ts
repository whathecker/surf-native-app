/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import { SurfProfileState, SurfProfileAction } from "./types";

export default (
  state: SurfProfileState,
  action: SurfProfileAction,
): SurfProfileState => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return { ...state, ...action.payload! };
    case "ERROR":
      return { ...state, errorMsg: action.payload?.errorMsg };
    default:
      return { ...state };
  }
};
