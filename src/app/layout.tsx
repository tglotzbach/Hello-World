import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tucker Ratcliff — Product Manager",
  description:
    "Senior Product Manager specializing in payments infrastructure, embedded finance, and AI-native products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
