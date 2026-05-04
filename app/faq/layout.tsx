import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Nelson Islamic Cultural Society",
  description:
    "Frequently asked questions about the Nelson Islamic Cultural Society, our services, events, and community.",
  openGraph: {
    title: "FAQ | Nelson Islamic Cultural Society",
    description: "Find answers to common questions about our organization and community.",
    url: "/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
