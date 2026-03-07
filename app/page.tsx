"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useSiteSettings, usePublications } from "@/lib/sanity/useSanityData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Home() {
  const { lang, t } = useLanguage();
  const siteConfig = useSiteSettings();
  const publications = usePublications();

  const latestPublications = publications.slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[85vh] grid-cols-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 lg:py-0">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              className="order-2 lg:order-1"
            >
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl lg:max-w-none">
                <Image
                  src="/images/esen-profile.jpg"
                  alt="Esen Kara"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-copper/20 blur-2xl" />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="space-y-6"
              >
                <motion.h1
                  custom={1}
                  variants={fadeUp}
                  className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                  style={{ color: "var(--foreground)" }}
                >
                  {t(siteConfig.greeting.en, siteConfig.greeting.tr)}
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={fadeUp}
                  className="font-serif text-xl italic text-olive-light sm:text-2xl"
                >
                  {t(siteConfig.title.en, siteConfig.title.tr)}
                </motion.p>

                <motion.p
                  custom={3}
                  variants={fadeUp}
                  className="max-w-lg font-sans text-base leading-relaxed sm:text-lg"
                  style={{ color: "var(--foreground)", opacity: 0.75 }}
                >
                  {t(siteConfig.bio.en, siteConfig.bio.tr)}
                </motion.p>

                {/* Social links */}
                <motion.div
                  custom={4}
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-3 pt-2"
                >
                  <a
                    href="https://avesis.yasar.edu.tr/esen.kara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 hover:bg-olive hover:text-cream"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  >
                    AVESİS
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://www.researchgate.net/profile/Esen-Kara-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 hover:bg-olive hover:text-cream"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  >
                    ResearchGate
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://www.google.com/search?q=instagram+esenkara_&oq=instagram+esenkara_&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRiPAtIBCDQ4MDJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 hover:bg-olive hover:text-cream"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  >
                    Instagram
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                  custom={5}
                  variants={fadeUp}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Link
                    href="/publications"
                    className="inline-flex items-center gap-2 rounded-full bg-olive px-6 py-3 font-sans text-sm font-medium text-cream transition-all duration-200 hover:bg-olive-light hover:shadow-lg"
                  >
                    <BookOpen className="h-4 w-4" />
                    {t("View Publications", "Yayınları Gör")}
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-copper px-6 py-3 font-sans text-sm font-medium text-copper transition-all duration-200 hover:bg-copper hover:text-cream"
                  >
                    {t("About Me", "Hakkımda")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Latest Publications ─── */}
      <section
        className="border-y py-20 lg:py-28"
        style={{ borderColor: "var(--card-border)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <h2
                className="font-serif text-3xl font-bold sm:text-4xl"
                style={{ color: "var(--foreground)" }}
              >
                {t("Latest Publications", "Son Yayınlar")}
              </h2>
              <p
                className="mt-3 max-w-xl font-sans text-base"
                style={{ color: "var(--foreground)", opacity: 0.6 }}
              >
                {t(
                  "Recent articles, books, and book chapters.",
                  "Son makaleler, kitaplar ve kitap bölümleri."
                )}
              </p>
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-copper transition-colors hover:text-copper-light"
            >
              {t("View all publications", "Tüm yayınları gör")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="space-y-0 divide-y" style={{ borderColor: "var(--card-border)" }}>
            {latestPublications.map((pub, i) => (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group py-6 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-olive/10 px-2.5 py-0.5 font-sans text-xs font-medium text-olive">
                        {pub.type === "article"
                          ? t("Article", "Makale")
                          : pub.type === "book"
                          ? t("Book", "Kitap")
                          : t("Chapter", "Bölüm")}
                      </span>
                      <span
                        className="font-sans text-xs"
                        style={{ color: "var(--foreground)", opacity: 0.5 }}
                      >
                        {pub.year}
                      </span>
                    </div>
                    <h3
                      className="font-serif text-lg font-semibold leading-snug transition-colors duration-200 group-hover:text-copper"
                      style={{ color: "var(--foreground)" }}
                    >
                      {pub.title}
                    </h3>
                    {pub.journal && (
                      <p className="mt-1 font-sans text-sm italic text-copper/80">
                        {pub.journal}
                      </p>
                    )}
                    {pub.coAuthors && pub.coAuthors.length > 0 && (
                      <p
                        className="mt-1 font-sans text-xs"
                        style={{ color: "var(--foreground)", opacity: 0.5 }}
                      >
                        {t("with", "ile")} {pub.coAuthors.join(", ")}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 font-sans text-xs font-medium transition-colors hover:bg-olive hover:text-cream"
                        style={{
                          borderColor: "var(--card-border)",
                          color: "var(--foreground)",
                        }}
                      >
                        View
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
