/** Shared site SEO constants — single source of truth for URLs and author. */
export const SITE_URL = "https://www.github.com/Deshan-Chandima";
export const SITE_NAME = "Deshan Chandima";
export const SITE_TAGLINE = "Software Developer & Machine Learning Enthusiast";
export const AUTHOR_URL = SITE_URL;
export const TWITTER_HANDLE = "@DeshanChandima";
export const DEFAULT_OG_IMAGE = "/images/Mirror.JPG";
export const LOGO_URL = `${SITE_URL}/images/Mirror.JPG`;



export function toIsoDateTime(dateStr?: string): string | undefined {
  if (!dateStr) return undefined;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

export function readingTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

