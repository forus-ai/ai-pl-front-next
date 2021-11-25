export function objToQueryString(obj: Obj): string {
  const converted = Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `?${converted}`;
}
