const DEFAULT_SITE_URL = "https://zeroclaw.lol";
const DEFAULT_PROJECT_NAME = "zeroclaw";
const DEFAULT_CLARITY_PROJECT_ID = "vz9tk8vxfa";

function readPublicEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function normalizeSiteUrl(value?: string): string {
  if (!value) {
    return DEFAULT_SITE_URL;
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

function extractHost(value: string): string {
  try {
    return new URL(value).hostname;
  } catch {
    return "zeroclaw.lol";
  }
}

export const siteKeywords = [
  "ZeroClaw",
  "what is ZeroClaw",
  "ZeroClaw guide",
  "ZeroClaw install",
  "ZeroClaw architecture",
  "ZeroClaw security",
  "ZeroClaw providers",
  "ZeroClaw Raspberry Pi",
  "ZeroClaw vs OpenClaw",
];

const siteUrl = normalizeSiteUrl(readPublicEnv("NEXT_PUBLIC_WEB_URL"));

export const siteConfig = {
  name: readPublicEnv("NEXT_PUBLIC_PROJECT_NAME") ?? DEFAULT_PROJECT_NAME,
  title: "ZeroClaw Guide",
  description:
    "Independent ZeroClaw keyword hub covering architecture, setup, security posture, provider support, and deployment fit.",
  url: siteUrl,
  host: extractHost(siteUrl),
  keywords: siteKeywords,
  ogImage: `${siteUrl}/brand/logo-mark.png`,
  googleAnalyticsId: readPublicEnv("NEXT_PUBLIC_GOOGLE_ANALYTICS_ID"),
  clarityProjectId:
    readPublicEnv("NEXT_PUBLIC_CLARITY_PROJECT_ID") ??
    DEFAULT_CLARITY_PROJECT_ID,
};

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}
