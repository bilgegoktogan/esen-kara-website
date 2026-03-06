"use client";

import Link from "next/link";
import { Instagram, BookOpen, GraduationCap, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t mt-20" style={{ borderColor: "var(--card-border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">
              <span className="text-copper">E</span>sen <span className="text-copper">K</span>ara
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              {t(
                "Assistant Professor, English Language and Literature",
                "Dr. Öğr. Üyesi, İngiliz Dili ve Edebiyatı"
              )}
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              {t(siteConfig.university.name.en, siteConfig.university.name.tr)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider mb-3 text-copper">
              {t("Quick Links", "Hızlı Bağlantılar")}
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/publications" className="hover:text-copper transition-colors">
                {t("Publications", "Yayınlar")}
              </Link>
              <Link href="/research" className="hover:text-copper transition-colors">
                {t("Research", "Araştırma")}
              </Link>
              <Link href="/blog" className="hover:text-copper transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-copper transition-colors">
                {t("Contact", "İletişim")}
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider mb-3 text-copper">
              {t("Connect", "Bağlantılar")}
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-copper/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.social.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-copper/10 transition-colors"
                aria-label="Google Scholar"
              >
                <GraduationCap size={20} />
              </a>
              <a
                href={siteConfig.social.academia}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-copper/10 transition-colors"
                aria-label="Academia.edu"
              >
                <BookOpen size={20} />
              </a>
              <a
                href={siteConfig.social.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-copper/10 transition-colors"
                aria-label="ResearchGate"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center text-xs"
          style={{ borderColor: "var(--card-border)", color: "var(--foreground)", opacity: 0.5 }}
        >
          © {new Date().getFullYear()} Esen Kara Göktoğan. {t("All rights reserved.", "Tüm hakları saklıdır.")}
        </div>
      </div>
    </footer>
  );
}
