"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useSiteSettings, useResearchAreas, usePublications, useBlogPosts } from "@/lib/sanity/useSanityData";

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
  const researchAreas = useResearchAreas();
  const publications = usePublications();
  const blogPosts = useBlogPosts();

  const latestPublications = publications.slice(0, 3);
  const latestBlogPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[85vh] grid-cols-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 lg:py-0">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              className="order-2 lg:order-1"
            >
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-olive shadow-2xl lg:max-w-none">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-cream/60">
                  <svg
                    className="h-16 w-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <span className="font-sans text-sm tracking-wide">
                    {t("Photo coming soon", "Fotoğraf yakında")}
                  </span>
                </div>
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
                <motion.p
                  custom={0}
                  variants={fadeUp}
                  className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-copper"
                >
                  {t(
                    siteConfig.university.department.en,
                    siteConfig.university.department.tr
                  )}
                </motion.p>

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
                    href={siteConfig.social.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 hover:bg-olive hover:text-cream"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  >
                    Google Scholar
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={siteConfig.social.academia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 hover:bg-olive hover:text-cream"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  >
                    Academia
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={siteConfig.social.researchgate}
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
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-sans text-sm transition-colors duration-200 hover:bg-olive hover:text-cream"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  >
                    X / Twitter
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={siteConfig.social.instagram}
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

      {/* ─── Research Areas ─── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2
              className="font-serif text-3xl font-bold sm:text-4xl"
              style={{ color: "var(--foreground)" }}
            >
              {t("Research Areas", "Araştırma Alanları")}
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl font-sans text-base"
              style={{ color: "var(--foreground)", opacity: 0.6 }}
            >
              {t(
                "My work spans several interconnected fields, bridging literary analysis with spatial and ecological thought.",
                "Çalışmalarım, edebiyat analizini mekânsal ve ekolojik düşünceyle birleştiren birbiriyle bağlantılı alanlara yayılmaktadır."
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/research#${area.id}`}
                  className="group block h-full rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <span className="mb-4 block text-3xl">{area.icon}</span>
                  <h3
                    className="mb-2 font-serif text-xl font-semibold transition-colors duration-200 group-hover:text-copper"
                    style={{ color: "var(--foreground)" }}
                  >
                    {t(area.title, area.titleTr)}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "var(--foreground)", opacity: 0.65 }}
                  >
                    {t(area.description, area.descriptionTr)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 font-sans text-sm font-medium text-copper opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {t("Explore", "Keşfet")}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
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
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 font-sans text-xs font-medium transition-colors hover:bg-olive hover:text-cream"
                        style={{
                          borderColor: "var(--card-border)",
                          color: "var(--foreground)",
                        }}
                      >
                        DOI
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

      {/* ─── Latest Blog Posts ─── */}
      <section className="py-20 lg:py-28">
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
                {t("From the Blog", "Blogdan")}
              </h2>
              <p
                className="mt-3 max-w-xl font-sans text-base"
                style={{ color: "var(--foreground)", opacity: 0.6 }}
              >
                {t(
                  "Reflections on literature, travel, and academic life.",
                  "Edebiyat, seyahat ve akademik yaşam üzerine düşünceler."
                )}
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-copper transition-colors hover:text-copper-light"
            >
              {t("All posts", "Tüm yazılar")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestBlogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  {/* Placeholder image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-olive/10">
                    <div className="absolute inset-0 flex items-center justify-center bg-olive/5">
                      <BookOpen
                        className="h-10 w-10 text-olive/30 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-full bg-copper/90 px-2.5 py-1 font-sans text-xs font-medium text-cream">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <time
                      className="mb-2 block font-sans text-xs"
                      style={{ color: "var(--foreground)", opacity: 0.5 }}
                      dateTime={post.date}
                    >
                      {new Date(post.date).toLocaleDateString(
                        lang === "tr" ? "tr-TR" : "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </time>
                    <h3
                      className="mb-2 font-serif text-lg font-semibold leading-snug transition-colors duration-200 group-hover:text-copper"
                      style={{ color: "var(--foreground)" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="line-clamp-2 font-sans text-sm leading-relaxed"
                      style={{ color: "var(--foreground)", opacity: 0.6 }}
                    >
                      {post.excerpt}
                    </p>
                    {post.location && (
                      <p className="mt-3 font-sans text-xs text-copper/70">
                        {post.location}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1 font-sans text-sm font-medium text-copper">
                      {t("Read more", "Devamını oku")}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
