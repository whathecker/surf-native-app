function getQueryString(params: Record<string, string>): string {
  return (
    "?" +
    Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&")
  );
}

export default getQueryString;
