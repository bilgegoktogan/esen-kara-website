"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useBlogPosts } from "@/lib/sanity/useSanityData";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

type Category = "all" | "literature" | "travel" | "academia" | "culture" | "books";

const categories: { key: Category; en: string; tr: string }[] = [
  { key: "all", en: "All", tr: "Tümü" },
  { key: "literature", en: "Literature", tr: "Edebiyat" },
  { key: "travel", en: "Travel", tr: "Seyahat" },
  { key: "academia", en: "Academia", tr: "Akademi" },
  { key: "culture", en: "Culture", tr: "Kültür" },
  { key: "books", en: "Books", tr: "Kitaplar" },
];

const categoryLabels: Record<string, { en: string; tr: string }> = {
  literature: { en: "Literature", tr: "Edebiyat" },
  travel: { en: "Travel", tr: "Seyahat" },
  academia: { en: "Academia", tr: "Akademi" },
  culture: { en: "Culture", tr: "Kültür" },
  books: { en: "Books", tr: "Kitaplar" },
};

export default function BlogPage() {
  const { lang, t } = useLanguage();
  const blogPosts = useBlogPosts();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* ─── Page Header ─── */}
      <section className="px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-olive">
              {t("Blog", "Blog")}
            </h1>
            <div
              className="mt-4 h-1 w-20 rounded-full"
              style={{ backgroundColor: "#B87333" }}
            />
            <p className="mt-6 max-w-xl font-sans text-lg text-ink-light leading-relaxed">
              {t(
                "Reflections on literature, travel, academic life, and the stories that shape our world.",
                "Edebiyat, seyahat, akademik yaşam ve dünyamızı şekillendiren hikayeler üzerine düşünceler."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Category Filter ─── */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`rounded-full px-5 py-2 font-sans text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-copper text-cream shadow-md"
                      : "hover:bg-copper/10 hover:text-copper"
                  }`}
                  style={
                    isActive
                      ? {}
                      : {
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--card-border)",
                          color: "var(--foreground)",
                        }
                  }
                >
                  {t(cat.en, cat.tr)}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── Blog Post Grid ─── */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            {filteredPosts.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerContainer}
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredPosts.map((post) => (
                  <motion.div key={post.slug} variants={cardVariant} layout>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block h-full overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      style={{
                        background: "var(--card-bg)",
                        borderColor: "var(--card-border)",
                      }}
                    >
                      {/* Image placeholder */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <div className="absolute inset-0 bg-olive/10">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <BookOpen className="h-12 w-12 text-olive/25 transition-transform duration-500 group-hover:scale-110" />
                          </div>
                        </div>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                        {/* Category badge */}
                        <div className="absolute bottom-3 left-3">
                          <span className="rounded-full bg-copper/90 px-3 py-1 font-sans text-xs font-medium text-cream shadow-sm">
                            {t(
                              categoryLabels[post.category]?.en ?? post.category,
                              categoryLabels[post.category]?.tr ?? post.category
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="flex flex-col p-5">
                        {/* Date & Location */}
                        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                          <span
                            className="inline-flex items-center gap-1.5 font-sans text-xs"
                            style={{ color: "var(--foreground)", opacity: 0.5 }}
                          >
                            <Calendar className="h-3 w-3" />
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString(
                                lang === "tr" ? "tr-TR" : "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </time>
                          </span>
                          {post.location && (
                            <span
                              className="inline-flex items-center gap-1 font-sans text-xs"
                              style={{ color: "var(--foreground)", opacity: 0.5 }}
                            >
                              <MapPin className="h-3 w-3" />
                              {post.location}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3
                          className="mb-2 font-serif text-lg font-semibold leading-snug transition-colors duration-200 group-hover:text-copper"
                          style={{ color: "var(--foreground)" }}
                        >
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p
                          className="line-clamp-2 font-sans text-sm leading-relaxed"
                          style={{ color: "var(--foreground)", opacity: 0.6 }}
                        >
                          {post.excerpt}
                        </p>

                        {/* Read more */}
                        <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-copper">
                          {t("Read more", "Devamını oku")}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <BookOpen
                  className="mb-4 h-16 w-16"
                  style={{ color: "var(--foreground)", opacity: 0.2 }}
                />
                <h3
                  className="font-serif text-xl font-semibold"
                  style={{ color: "var(--foreground)", opacity: 0.6 }}
                >
                  {t("No posts yet in this category", "Bu kategoride henüz yazı yok")}
                </h3>
                <p
                  className="mt-2 font-sans text-sm"
                  style={{ color: "var(--foreground)", opacity: 0.4 }}
                >
                  {t("Check back soon for new content.", "Yeni içerikler için tekrar bakın.")}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
