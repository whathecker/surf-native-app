import React, { useReducer } from "react";
import surfProfileReducer from "./surf-profile-reducer";
import { fetchSurfProfile, createSurfProfile } from "./surf-profile-actions";
import { SurfProfileState, ContextProviderProps } from "./types";

const defaultSurfProfileState: SurfProfileState = {
  surfProfile: { surfLevelScore: null },
};

const defaultContextProviderProps: ContextProviderProps = {
  state: defaultSurfProfileState,
  fetchSurfProfile: () => Promise.resolve(),
  createSurfProfile: () => Promise.resolve(),
};

export const SurfProfileContext = React.createContext(
  defaultContextProviderProps,
);

export const SurfProfileContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    surfProfileReducer,
    defaultSurfProfileState,
  );

  const boundActions = {
    fetchSurfProfile: fetchSurfProfile(dispatch),
    createSurfProfile: createSurfProfile(dispatch),
  };

  return (
    <SurfProfileContext.Provider value={{ state, ...boundActions }}>
      {children}
    </SurfProfileContext.Provider>
  );
};
