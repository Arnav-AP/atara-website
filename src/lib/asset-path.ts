/**
 * Returns the correct URL for a public asset, accounting for the base path.
 * Works in both dev (`/`) and production (`/atara-website/`) environments.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  // BASE_URL already ends with `/`
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return base + cleanPath;
}
