import { groq } from "next-sanity";

export const puppiesQuery = groq`
  *[_type == "puppy" && isAvailable == true] | order(sortOrder asc) {
    _id,
    name,
    gender,
    personality,
    "imageUrl": image.asset->url,
    isAvailable,
    sortOrder
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc)[0...6] {
    _id,
    quote,
    author,
    location,
    "imageUrl": image.asset->url
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    brandName,
    heroHeadline,
    heroSubheadline,
    messengerUrl
  }
`;
