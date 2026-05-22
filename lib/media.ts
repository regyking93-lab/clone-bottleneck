/** Semantic media paths for optimized loading and SEO-friendly routes */
export const media = {
  hero: {
    video: "/media/hero/hero-pomeranian.mp4",
    poster: "/media/hero/hero-poster.jpg",
  },
  trust: {
    delivery: [
      {
        src: "/media/trust/delivery/89cc6aed-9224-40d5-9e6c-558f153298bd.JPG",
        alt: "Happy family receiving their Pomeranian puppy delivery — Emma's Rogers Pomeranians",
      },
      {
        src: "/media/trust/delivery/f913a8f5-cd9d-4257-bc4e-efd976ef7777.JPG",
        alt: "Pomeranian puppy handoff confirmation photo with new family — Emma's Rogers Pomeranians",
      },
    ],
    videos: [
      {
        src: "/media/trust/videos/73f0dd3a-a2e4-4b30-af44-87a1f699085f.MP4",
        alt: "Video of Pomeranian puppy safely delivered to loving family",
      },
      {
        src: "/media/trust/videos/c72f4e34-4a27-4275-8997-934b19ecb290.MP4",
        alt: "Delivery day video of teacup Pomeranian meeting new owners",
      },
      {
        src: "/media/trust/videos/68a9dead-d6d6-48c8-88ff-efeb980484d3.MP4",
        alt: "Family welcoming home-raised Pomeranian puppy — placement video",
      },
    ],
  },
  showcase: [
    {
      src: "/media/showcase/1b14feb9-d70e-48fa-a358-6eb4e5b7b1b8.MP4",
      alt: "Teacup Pomeranian puppy playing in loving home environment",
    },
    {
      src: "/media/showcase/c9395711-14ab-41ed-9be6-a67295594e46.MP4",
      alt: "Teddy-face Pomeranian puppy with affectionate personality",
    },
    {
      src: "/media/showcase/7e2a3fc9-691c-4adb-b190-703911c8b5df.MP4",
      alt: "Healthy home-raised Pomeranian puppy video for families",
    },
  ],
  puppyPlaceholder: "/media/hero/hero-poster.jpg",
} as const;
