import fs from "fs";
import path from "path";
import type { Puppy } from "@/lib/types";

const PUPPIES_MEDIA_DIR = path.join(process.cwd(), "public/media/puppies");
const PUPPIES_BASE_PATH = "/media/puppies";

const PERSONALITY_TEMPLATES = [
  "Calm teddy-face personality. Affectionate, playful, and loves cuddles.",
  "Sweet and gentle. Curious, friendly, and wonderful with families.",
  "Energetic little companion. Confident, loyal, and full of charm.",
  "Loves lap time and gentle play. Perfect for a cozy home.",
  "Bright, social, and eager to bond. Thrives with attentive families.",
  "Soft coat, expressive eyes, and a loving teacup Pomeranian temperament.",
  "Playful but easygoing. A delightful addition to a caring household.",
  "Affectionate cuddle buddy with a happy, healthy home-raised spirit.",
] as const;

/** URL-safe path for next/image (handles spaces in filenames). */
export function puppyImagePath(filename: string): string {
  return `${PUPPIES_BASE_PATH}/${encodeURIComponent(filename)}`;
}

function isDuplicateCopy(filename: string, allFiles: Set<string>): boolean {
  const duplicateMatch = filename.match(/^(.+)\s+2(\.[^.]+)$/i);
  if (!duplicateMatch) return false;
  const baseName = `${duplicateMatch[1]}${duplicateMatch[2]}`;
  return allFiles.has(baseName);
}

function buildCatalogFromDisk(): Puppy[] {
  if (!fs.existsSync(PUPPIES_MEDIA_DIR)) return [];

  const filenames = fs
    .readdirSync(PUPPIES_MEDIA_DIR)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b));

  const fileSet = new Set(filenames);
  const uniqueFiles = filenames.filter((f) => !isDuplicateCopy(f, fileSet));

  return uniqueFiles.map((filename, index) => {
    const slug = filename.replace(/\.[^.]+$/, "").replace(/\s+/g, "-").toLowerCase();
    return {
      _id: `puppy-${slug}`,
      name: "",
      gender: index % 2 === 0 ? "male" : "female",
      personality: PERSONALITY_TEMPLATES[index % PERSONALITY_TEMPLATES.length],
      imageUrl: puppyImagePath(filename),
      isAvailable: true,
      sortOrder: index + 1,
    } satisfies Puppy;
  });
}

/** All puppies from public/media/puppies (server-built at import). */
export const puppyCatalog: Puppy[] = buildCatalogFromDisk();
