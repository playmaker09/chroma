import { existsSync } from "fs";
import path from "path";

const HERO_IMAGES = [
  "hero-visual-left.png",
  "hero-visual-center.png",
  "hero-visual-right.png",
] as const;

const HERO_CENTER_MP4 = "hero-visual-center.mp4";
const HERO_CENTER_MOV = "hero-visual-center.mov";

function heroDir() {
  return path.join(process.cwd(), "public", "hero");
}

export function getHeroAssetAvailability() {
  const dir = heroDir();

  return {
    left: existsSync(path.join(dir, HERO_IMAGES[0])),
    center: existsSync(path.join(dir, HERO_IMAGES[1])),
    right: existsSync(path.join(dir, HERO_IMAGES[2])),
    ready: HERO_IMAGES.every((file) => existsSync(path.join(dir, file))),
  };
}

export function getHeroCenterVideoSources() {
  const dir = heroDir();
  const sources: { src: string; type: string }[] = [];
  sources.push({ src: `/hero/${HERO_CENTER_MP4}`, type: "video/mp4" });
  return sources;
}

export const HERO_PATHS = {
  left: "/hero/hero-visual-left.png",
  center: "/hero/hero-visual-center.png",
  right: "/hero/hero-visual-right.png",
} as const;
