import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/auth";

const ResolveAuthScreen: React.FC = () => {
  const { restoreToken } = useContext(AuthContext);

  useEffect(() => {
    restoreToken();
  }, []);
  return null;
};

export default ResolveAuthScreen;
