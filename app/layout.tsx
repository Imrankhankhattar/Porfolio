import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandPaletteProvider } from "@/components/command-palette";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Vercel injects these automatically; falls back to localhost outside Vercel.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ??
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} — ${site.roles[0]}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.roles[0]}`,
    description: site.tagline,
    images: [{ url: site.avatarUrl, width: 592, height: 592, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.roles[0]}`,
    description: site.tagline,
    images: [site.avatarUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CommandPaletteProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
