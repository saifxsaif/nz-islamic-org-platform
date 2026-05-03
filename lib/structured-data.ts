export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nelson Islamic Cultural Society",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/logo.png`,
    description:
      "Nelson Islamic Cultural Society - Promoting Islamic culture, education, and community engagement in Nelson, New Zealand.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nelson",
      addressCountry: "NZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@nelsonislamicsociety.org.nz",
      telephone: "+64-3-XXXX-XXXX",
    },
    sameAs: [
      "https://facebook.com/nelsonislamicsociety",
      "https://instagram.com/nelsonislamicsociety",
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nelson Islamic Cultural Society",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/og-image.jpg`,
    description:
      "Islamic cultural and community organization in Nelson, New Zealand",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nelson",
      addressCountry: "NZ",
    },
    telephone: "+64-3-XXXX-XXXX",
    email: "contact@nelsonislamicsociety.org.nz",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  };
}
