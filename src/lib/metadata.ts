import * as cheerio from "cheerio";

export type SiteMetadata = {
  title: string;
  description: string;
  image: string;
  siteName: string;
  favicon: string;
  url: string;
};

function absolutize(base: string, maybeRelative: string | undefined | null): string {
  if (!maybeRelative) return "";
  try {
    return new URL(maybeRelative, base).toString();
  } catch {
    return "";
  }
}

function pick(
  $: cheerio.CheerioAPI,
  selectors: string[]
): string {
  for (const sel of selectors) {
    const content =
      $(sel).attr("content") ||
      $(sel).attr("href") ||
      $(sel).text();
    if (content && content.trim()) return content.trim();
  }
  return "";
}

export async function fetchSiteMetadata(rawUrl: string): Promise<SiteMetadata> {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new Error("Invalid URL");
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only http/https URLs are allowed");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const res = await fetch(url.toString(), {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; EverKryptonPortfolio/1.0; +https://everkrypton.github.io)",
        Accept: "text/html,application/xhtml+xml",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch site (${res.status})`);
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) {
      // Non-HTML — still return a basic card
      return {
        title: url.hostname,
        description: `Project at ${url.hostname}`,
        image: "",
        siteName: url.hostname,
        favicon: absolutize(url.origin, "/favicon.ico"),
        url: url.toString(),
      };
    }

    const html = await res.text();
    const $ = cheerio.load(html);
    const finalUrl = res.url || url.toString();

    const title =
      pick($, [
        'meta[property="og:title"]',
        'meta[name="twitter:title"]',
        "title",
      ]) || url.hostname;

    const description =
      pick($, [
        'meta[property="og:description"]',
        'meta[name="description"]',
        'meta[name="twitter:description"]',
      ]) || "";

    const image = absolutize(
      finalUrl,
      pick($, [
        'meta[property="og:image"]',
        'meta[name="twitter:image"]',
        'meta[name="twitter:image:src"]',
      ])
    );

    const siteName =
      pick($, ['meta[property="og:site_name"]']) || url.hostname;

    const favicon =
      absolutize(
        finalUrl,
        pick($, [
          'link[rel="icon"]',
          'link[rel="shortcut icon"]',
          'link[rel="apple-touch-icon"]',
        ])
      ) || absolutize(url.origin, "/favicon.ico");

    return {
      title: title.slice(0, 200),
      description: description.slice(0, 500),
      image,
      siteName: siteName.slice(0, 120),
      favicon,
      url: finalUrl,
    };
  } finally {
    clearTimeout(timeout);
  }
}
