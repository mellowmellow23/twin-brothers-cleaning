import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteGraphSchema } from "@/lib/schema";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={siteGraphSchema()} />
        <Navbar />
        <main id="main-content" className="container-wide py-10 sm:py-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
