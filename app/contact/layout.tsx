import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nelson Islamic Cultural Society",
  description:
    "Get in touch with the Nelson Islamic Cultural Society. Send us a message or find our contact information.",
  openGraph: {
    title: "Contact Us | Nelson Islamic Cultural Society",
    description: "Get in touch with us. We'd love to hear from you!",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
