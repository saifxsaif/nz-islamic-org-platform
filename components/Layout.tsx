import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}
