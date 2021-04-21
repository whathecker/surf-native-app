function getUrlEncodedPayload(payload: Record<string, string>): string {
  let output = "";

  for (const key in payload) {
    output = output.concat(`${key}=${encodeURIComponent(payload[key])}`, "&");
  }

  return output.slice(0, -1);
}

export default getUrlEncodedPayload;
