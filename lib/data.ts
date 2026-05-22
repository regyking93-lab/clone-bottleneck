import { fallbackTestimonials } from "@/lib/fallback-data";
import { puppyCatalog } from "@/lib/puppies-catalog";
import { puppiesQuery, testimonialsQuery } from "@/lib/queries";
import { isSanityConfigured, sanityClient } from "@/lib/sanity.client";
import type { Puppy, Testimonial } from "@/lib/types";

export async function getPuppies(): Promise<Puppy[]> {
  if (!isSanityConfigured || !sanityClient) {
    return puppyCatalog.length > 0 ? puppyCatalog : [];
  }
  try {
    const puppies = await sanityClient.fetch<Puppy[]>(puppiesQuery);
    return puppies?.length ? puppies : puppyCatalog;
  } catch {
    return puppyCatalog;
  }
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
