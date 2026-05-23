import {
  fallbackPuppies,
  fallbackTestimonials,
} from "@/lib/fallback-data";
import { buildFeaturedPuppies } from "@/lib/featured-puppies";
import { puppyCatalog } from "@/lib/puppies-catalog";
import { puppiesQuery, testimonialsQuery } from "@/lib/queries";
import { isSanityConfigured, sanityClient } from "@/lib/sanity.client";
import type { Puppy, Testimonial } from "@/lib/types";

function resolvePuppySource(raw: Puppy[]): Puppy[] {
  if (raw.length > 0) return raw;
  if (puppyCatalog.length > 0) return puppyCatalog;
  return fallbackPuppies;
}

export async function getPuppies(): Promise<Puppy[]> {
  let raw: Puppy[] = [];

  if (isSanityConfigured && sanityClient) {
    try {
      const puppies = await sanityClient.fetch<Puppy[]>(puppiesQuery);
      raw = puppies ?? [];
    } catch {
      raw = [];
    }
  }

  return buildFeaturedPuppies(resolvePuppySource(raw));
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured || !sanityClient) return fallbackTestimonials;
  try {
    const items = await sanityClient.fetch<Testimonial[]>(testimonialsQuery);
    return items?.length ? items : fallbackTestimonials;
  } catch {
    return fallbackTestimonials;
  }
}
