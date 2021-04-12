import React, { useEffect, useContext } from "react";
import { SurfProfileContext } from "../context/surf-profile";

const PostAuthScreen: React.FC = () => {
  const { fetchSurfProfile } = useContext(SurfProfileContext);

  useEffect(() => {
    fetchSurfProfile();
  }, []);
  return null;
};

export default PostAuthScreen;
