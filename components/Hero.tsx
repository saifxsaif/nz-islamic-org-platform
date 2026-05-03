import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaButton?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaButton,
  children,
}: HeroProps) {
  return (
    <section
      className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.8), rgba(34, 197, 94, 0.8)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mx-auto max-w-7xl text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">{subtitle}</p>

        {children}

        {ctaButton && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaButton.href}
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              {ctaButton.text}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
