import { mkdirSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const publicBrandDir = join(rootDir, "public", "brand");
const appDir = join(rootDir, "app");

mkdirSync(publicBrandDir, { recursive: true });
mkdirSync(appDir, { recursive: true });

const svg = String.raw`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" rx="96" fill="#F4ECE0"/>
  <g opacity="0.58" stroke="#15130F" stroke-width="1">
    <path d="M88 128H424"/>
    <path d="M88 256H424"/>
    <path d="M88 384H424"/>
    <path d="M128 88V424"/>
    <path d="M256 88V424"/>
    <path d="M384 88V424"/>
  </g>
  <circle cx="256" cy="256" r="142" stroke="#15130F" stroke-width="34"/>
  <path d="M175 118L119 41" stroke="#B95532" stroke-linecap="round" stroke-width="28"/>
  <path d="M245 96L203 29" stroke="#B95532" stroke-linecap="round" stroke-width="28"/>
  <path d="M316 108L291 31" stroke="#B95532" stroke-linecap="round" stroke-width="28"/>
  <path d="M171 175L355 359" stroke="#15130F" stroke-linecap="round" stroke-width="30"/>
  <path d="M156 329L340 145" stroke="#B95532" stroke-linecap="round" stroke-width="18"/>
  <circle cx="256" cy="256" r="18" fill="#15130F"/>
  <path d="M344 388H424" stroke="#15130F" stroke-width="8" stroke-linecap="round"/>
  <path d="M344 414H394" stroke="#B95532" stroke-width="8" stroke-linecap="round"/>
</svg>`;

const svgPath = join(publicBrandDir, "logo-mark.svg");
const pngPath = join(publicBrandDir, "logo-mark.png");
const faviconPngPath = join(publicBrandDir, "favicon.png");
const iconPngPath = join(appDir, "icon.png");
const faviconIcoPath = join(appDir, "favicon.ico");

writeFileSync(svgPath, svg);

execFileSync("magick", [svgPath, "-resize", "1024x1024", pngPath], {
  stdio: "inherit",
});
execFileSync("magick", [svgPath, "-resize", "256x256", faviconPngPath], {
  stdio: "inherit",
});
execFileSync("magick", [svgPath, "-resize", "512x512", iconPngPath], {
  stdio: "inherit",
});
execFileSync(
  "magick",
  [svgPath, "-background", "none", "-define", "icon:auto-resize=64,32,16", faviconIcoPath],
  {
    stdio: "inherit",
  }
);
