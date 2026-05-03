import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { getOrganizationSchema } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nelson Islamic Cultural Society | New Zealand",
  description:
    "Welcome to the Nelson Islamic Cultural Society. Learn about our community, services, and how to get involved in Nelson, New Zealand.",
  keywords: ["Nelson", "Islamic", "Cultural", "Society", "New Zealand", "Muslim", "Community"],
  authors: [{ name: "Nelson Islamic Cultural Society" }],
  creator: "Nelson Islamic Cultural Society",
  publisher: "Nelson Islamic Cultural Society",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "/",
    siteName: "Nelson Islamic Cultural Society",
    title: "Nelson Islamic Cultural Society | New Zealand",
    description:
      "Welcome to the Nelson Islamic Cultural Society. Learn about our community, services, and how to get involved in Nelson, New Zealand.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nelson Islamic Cultural Society",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelson Islamic Cultural Society | New Zealand",
    description:
      "Welcome to the Nelson Islamic Cultural Society. Learn about our community, services, and how to get involved.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en-NZ" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
