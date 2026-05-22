export type Puppy = {
  _id: string;
  name?: string | null;
  gender: "male" | "female";
  personality: string;
  imageUrl?: string | null;
  isAvailable: boolean;
  sortOrder: number;
};

export type Testimonial = {
  _id: string;
  quote: string;
  author: string;
  location?: string | null;
  imageUrl?: string | null;
};

export type SiteSettings = {
  brandName?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  messengerUrl?: string;
};
