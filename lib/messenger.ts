if (
  process.env.NODE_ENV === "development" &&
  !process.env.NEXT_PUBLIC_MESSENGER_URL
) {
  console.warn(
    "[messenger] NEXT_PUBLIC_MESSENGER_URL is not set — CTA buttons will link to a placeholder."
  );
}

export const MESSENGER_URL =
  process.env.NEXT_PUBLIC_MESSENGER_URL ?? "https://m.me/Emmarodgerspomeranians";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
