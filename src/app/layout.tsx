import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tucker Glotzbach — Product Manager",
    template: "%s",
  },
  description:
    "Senior Product Manager specializing in payments infrastructure, embedded finance, and AI-native products.",
  metadataBase: new URL("https://tuckerglotzbach.com"),
  openGraph: {
    title: "Tucker Glotzbach — Product Manager",
    description:
      "Senior Product Manager specializing in payments infrastructure, embedded finance, and AI-native products.",
    url: "https://tuckerglotzbach.com",
    siteName: "Tucker Glotzbach",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tucker Glotzbach — Product Manager",
    description:
      "Senior Product Manager specializing in payments infrastructure, embedded finance, and AI-native products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-ink font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
