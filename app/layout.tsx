import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/language-context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Esen Kara Göktoğan | Literature, City & Memory",
    template: "%s | Esen Kara Göktoğan",
  },
  description:
    "Assistant Professor of English Language and Literature at Yaşar University. Research in comparative literature, memory studies, ecocriticism, and critical urban theory.",
  keywords: [
    "Esen Kara",
    "Esen Kara Göktoğan",
    "Yaşar University",
    "comparative literature",
    "memory studies",
    "ecocriticism",
    "urban theory",
    "postcolonial studies",
  ],
  authors: [{ name: "Esen Kara Göktoğan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
    title: "Esen Kara Göktoğan | Literature, City & Memory",
    description:
      "Assistant Professor of English Language and Literature at Yaşar University.",
    siteName: "Esen Kara Göktoğan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="pt-16 min-h-screen">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
