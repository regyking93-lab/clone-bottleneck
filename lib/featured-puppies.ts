import type { Puppy } from "@/lib/types";

export const FEATURED_PUPPY_COUNT = 7;

const FEATURED_METADATA: Pick<Puppy, "name" | "gender" | "personality">[] = [
  {
    name: "Honey",
    gender: "female",
    personality:
      "Tiny cuddle companion with a calm, teddy-face personality. Loves lap time and gentle play.",
  },
  {
    name: "Biscuit",
    gender: "male",
    personality:
      "Soft little fluffball who's curious, friendly, and happiest right beside you.",
  },
  {
    name: "Pebbles",
    gender: "female",
    personality:
      "Sweet and gentle. Big eyes, quiet confidence, wonderful with a cozy home.",
  },
  {
    name: "Milo",
    gender: "male",
    personality:
      "Playful but easygoing. Confident little charm who bonds fast with attentive families.",
  },
  {
    name: "Luna",
    gender: "female",
    personality:
      "Bright and social. Loves attention, photos, and being held like a baby.",
  },
  {
    name: "Coco",
    gender: "female",
    personality:
      "Affectionate cuddle buddy with expressive eyes and a happy home-raised spirit.",
  },
  {
    name: "Nugget",
    gender: "male",
    personality:
      "Energetic little companion. Loyal, full of personality, still loves to snuggle at night.",
  },
];

function isImagePuppy(puppy: Puppy): boolean {
  if (!puppy.imageUrl) return false;
  return /\.(jpe?g|png|webp)(\?|$)/i.test(puppy.imageUrl);
}

/** Curate up to 7 homepage puppies with names and personality from metadata. */
export function buildFeaturedPuppies(puppies: Puppy[]): Puppy[] {
  const withImages = puppies.filter(isImagePuppy);
  const pool = withImages.length > 0 ? withImages : puppies;
  const slice = pool.slice(0, FEATURED_PUPPY_COUNT);

  return slice.map((puppy, index) => {
    const meta = FEATURED_METADATA[index];
    if (!meta) return puppy;

    return {
      ...puppy,
      name: puppy.name?.trim() || meta.name,
      gender: puppy.gender ?? meta.gender,
      personality: puppy.personality?.trim() || meta.personality,
      sortOrder: index + 1,
      isAvailable: puppy.isAvailable ?? true,
    };
  });
}

export function getFeaturedMetadataForFallback(): Puppy[] {
  return FEATURED_METADATA.map((meta, index) => ({
    _id: `featured-${index + 1}`,
    name: meta.name,
    gender: meta.gender,
    personality: meta.personality,
    imageUrl: null,
    isAvailable: true,
    sortOrder: index + 1,
  }));
}
