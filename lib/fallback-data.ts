import { getFeaturedMetadataForFallback } from "@/lib/featured-puppies";
import type { Puppy, Testimonial } from "@/lib/types";

export const fallbackPuppies: Puppy[] = getFeaturedMetadataForFallback();

export const fallbackTestimonials: Testimonial[] = [
  {
    _id: "t1",
    quote:
      "ok i was nervous messaging at first lol but emma sent videos the same day and our boy looked exactly like them. delivery was smooth and he came out the carrier wagging his little tail. we're obsessed.",
    author: "Sarah M.",
    location: "Texas",
  },
  {
    _id: "t2",
    quote:
      "We've looked at a lot of sites. This felt different. No pushy sales talk. Just real updates and patience while we picked. Vet papers were ready. Our girl settled in by night two.",
    author: "James & Lisa",
    location: "Florida",
  },
  {
    _id: "t3",
    quote:
      "Not gonna lie i almost didn't go through with it. Glad i did. FaceTime before we sent anything. Puppy was clean, fluffy, and already so people-friendly. Feels like family helped us, not a random listing.",
    author: "Michelle R.",
    location: "Georgia",
  },
  {
    _id: "t4",
    quote:
      "My mom wanted a small pom for months. Emma walked us through everything twice because we had questions. Handoff pic matched what we got. Little guy sleeps on my mom's shoulder every evening now.",
    author: "Denise K.",
    location: "North Carolina",
  },
  {
    _id: "t5",
    quote:
      "Reservation part was simple once she explained it. Refund policy made sense. Videos before pickup gave me peace of mind. Would message again if we ever want a second one.",
    author: "Andre T.",
    location: "Arizona",
  },
  {
    _id: "t6",
    quote:
      "Delivery day was emotional in a good way. Video of him meeting the kids still makes me cry. Communication on messenger was quick, kind, not robotic.",
    author: "Priya & Mark",
    location: "Ohio",
  },
];

