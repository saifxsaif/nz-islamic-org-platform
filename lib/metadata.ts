export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  locale: string;
  siteName: string;
  images: {
    url: string;
    width: number;
    height: number;
    alt: string;
  }[];
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const siteMetadata: SiteMetadata = {
  title: "Nelson Islamic Cultural Society",
  description:
    "Welcome to the Nelson Islamic Cultural Society. Learn about our community, services, and how to get involved in Nelson, New Zealand.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en-NZ",
  siteName: "Nelson Islamic Cultural Society",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Nelson Islamic Cultural Society",
    },
  ],
  contact: {
    email: "contact@nelsonislamicsociety.org.nz",
    phone: "+64 (0) 3 XXXX XXXX",
    address: "Nelson, New Zealand",
  },
  social: {
    facebook: "https://facebook.com/nelsonislamicsociety",
    instagram: "https://instagram.com/nelsonislamicsociety",
  },
};

export function getPageMetadata(page: "home" | "about" | "faq" | "contact") {
  const baseUrl = siteMetadata.url;

  const pages = {
    home: {
      title: "Nelson Islamic Cultural Society | New Zealand",
      description:
        "Welcome to the Nelson Islamic Cultural Society. Learn about our community, services, and how to get involved in Nelson, New Zealand.",
      url: baseUrl,
    },
    about: {
      title: "About Us | Nelson Islamic Cultural Society",
      description:
        "Learn about the Nelson Islamic Cultural Society, our mission, values, and community activities in Nelson, New Zealand.",
      url: `${baseUrl}/about`,
    },
    faq: {
      title: "FAQ | Nelson Islamic Cultural Society",
      description:
        "Frequently asked questions about the Nelson Islamic Cultural Society, our services, events, and community.",
      url: `${baseUrl}/faq`,
    },
    contact: {
      title: "Contact Us | Nelson Islamic Cultural Society",
      description:
        "Get in touch with the Nelson Islamic Cultural Society. Send us a message or find our contact information.",
      url: `${baseUrl}/contact`,
    },
  };

  return pages[page];
}
