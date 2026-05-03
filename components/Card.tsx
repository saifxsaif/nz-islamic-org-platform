import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

export function Card({ title, description, icon, href, className = "" }: CardProps) {
  const cardContent = (
    <div className={`bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow ${className}`}>
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block hover:no-underline">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
