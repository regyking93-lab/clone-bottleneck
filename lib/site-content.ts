export const faqItems = [
  {
    question: "Are the puppies vet checked?",
    answer:
      "Yes, always. Every puppy gets a health check and is properly prepped before going home. If you want to see records for a specific little one just ask us — we share everything openly.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "We do! Just tell us where you're located when you message and we'll figure out what works best. Some families come to pick up, others prefer delivery — either way we make sure the handoff is smooth and stress-free.",
  },
  {
    question: "Can I see videos before reserving?",
    answer:
      "Always. We would never expect you to commit to a puppy you haven't actually seen. We send videos and photos through Messenger so you can watch their little personality before you decide anything. Take all the time you need.",
  },
  {
    question: "Is the reservation refundable?",
    answer:
      "Yes. It's a small amount that holds your puppy while we get everything ready on our end. We walk you through exactly how it works before anything is sent — nothing happens without you fully understanding it first.",
  },
  {
    question: "How does the process work?",
    answer:
      "Just message us and we'll take it from there. Tell us a little about yourself, what you're looking for, your home situation — and we'll suggest puppies that actually fit. We stay with you through every step all the way to pickup or delivery. It's a conversation, not a transaction.",
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Message us",
    description:
      "Tell us about your home, temperament preferences, lifestyle, and timing.",
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
      "We coordinate safe pickup or delivery. You're supported until your puppy is home.",
  },
] as const;
