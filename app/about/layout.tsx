import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nelson Islamic Cultural Society",
  description:
    "Learn about the Nelson Islamic Cultural Society, our mission, values, and community activities in Nelson, New Zealand.",
  openGraph: {
    title: "About Us | Nelson Islamic Cultural Society",
    description:
      "Learn about the Nelson Islamic Cultural Society, our mission, values, and community activities.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
