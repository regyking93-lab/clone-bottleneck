import type { Puppy, Testimonial } from "@/lib/types";

export const fallbackPuppies: Puppy[] = [
  {
    _id: "fallback-1",
    name: "Available Puppy",
    gender: "male",
    personality:
      "Calm teddy-face personality — affectionate, playful, and loves cuddles.",
    imageUrl: null,
    isAvailable: true,
    sortOrder: 1,
  },
  {
    _id: "fallback-2",
    name: "Available Puppy",
    gender: "female",
    personality:
      "Sweet and gentle — curious, friendly, and wonderful with families.",
    imageUrl: null,
    isAvailable: true,
    sortOrder: 2,
  },
  {
    _id: "fallback-3",
    name: "Available Puppy",
    gender: "male",
    personality:
      "Energetic little companion — confident, loyal, and full of charm.",
    imageUrl: null,
    isAvailable: true,
    sortOrder: 3,
  },
];

export const fallbackTestimonials: Testimonial[] = [
  {
    _id: "t1",
    quote:
      "Emma was so patient helping us find the perfect fit. Our puppy arrived healthy, happy, and exactly as described in the videos.",
    author: "Sarah M.",
    location: "Texas",
  },
  {
    _id: "t2",
    quote:
      "We felt safe every step of the way. Clear communication, vet prep, and a smooth delivery. Could not recommend more.",
    author: "James & Lisa",
    location: "Florida",
  },
  {
    _id: "t3",
    quote:
      "This is not a puppy mill experience. You can tell each puppy is raised with love and placed with intention.",
    author: "Michelle R.",
    location: "Georgia",
  },
];

export const faqItems = [
  {
    question: "Are the puppies vet checked?",
    answer:
      "Yes. Every puppy receives veterinary care and health preparation before placement. Message us on Messenger for details about your specific puppy and current vet records.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes, we coordinate safe pickup or delivery depending on your location. Message us with your city and we will walk you through available options.",
  },
  {
    question: "Can I see videos before reserving?",
    answer:
      "Absolutely. We share photos and videos of available puppies directly in Messenger so you can feel confident before making any commitment.",
  },
  {
    question: "Is the reservation refundable?",
    answer:
      "We use a small refundable reservation to hold your puppy. Message us and we will explain exactly how it works — no surprises.",
  },
  {
    question: "How does the process work?",
    answer:
      "Simply message us, tell us what you are looking for, and we help match you with the right puppy. We guide you through reservation, vet prep, and safe pickup or delivery.",
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Message us",
    description:
      "Tell us what you are looking for — temperament, lifestyle, and timing.",
  },
  {
    step: 2,
    title: "We help you match",
    description:
      "We recommend puppies that fit your family, with photos and videos in Messenger.",
  },
  {
    step: 3,
    title: "Refundable reservation",
    description:
      "A small refundable reservation holds your puppy while we prepare everything.",
  },
  {
    step: 4,
    title: "Vet prep & transition",
    description:
      "Vet checks and transition details are arranged so you know what to expect.",
  },
  {
    step: 5,
    title: "Pickup or delivery",
    description:
      "We coordinate safe pickup or delivery — you are supported until your puppy is home.",
  },
] as const;
