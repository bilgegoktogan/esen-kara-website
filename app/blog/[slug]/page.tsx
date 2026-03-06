"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Tag,
  Twitter,
  Facebook,
  Linkedin,
  Link2,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useBlogPost } from "@/lib/sanity/useSanityData";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const categoryLabels: Record<string, { en: string; tr: string }> = {
  literature: { en: "Literature", tr: "Edebiyat" },
  travel: { en: "Travel", tr: "Seyahat" },
  academia: { en: "Academia", tr: "Akademi" },
  culture: { en: "Culture", tr: "Kültür" },
  books: { en: "Books", tr: "Kitaplar" },
};

export default function BlogPostPage() {
  const params = useParams();
  const { lang, t } = useLanguage();
  const slug = params.slug as string;
  const post = useBlogPost(slug);

  if (!post) {
    return (
      <div
        className="flex min-h-screen flex-col items-center justify-center px-6 font-sans"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-serif text-4xl font-bold text-olive md:text-5xl">
            {t("Post Not Found", "Yazı Bulunamadı")}
          </h1>
          <p
            className="mt-4 font-sans text-base"
            style={{ color: "var(--foreground)", opacity: 0.6 }}
          >
            {t(
              "The blog post you are looking for does not exist.",
              "Aradığınız blog yazısı bulunamadı."
            )}
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-olive px-6 py-3 font-sans text-sm font-medium text-cream transition-all duration-200 hover:bg-olive-light hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("Back to Blog", "Bloga Dön")}
          </Link>
        </motion.div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === "tr" ? "tr-TR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post.title;

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* ─── Back Navigation ─── */}
      <div className="px-6 pt-20 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-copper transition-colors duration-200 hover:text-copper-light"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("Back to Blog", "Bloga Dön")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ─── Hero Header ─── */}
      <section className="px-6 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Category badge */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <span className="inline-block rounded-full bg-copper/90 px-4 py-1.5 font-sans text-xs font-medium tracking-wide text-cream">
                {t(
                  categoryLabels[post.category]?.en ?? post.category,
                  categoryLabels[post.category]?.tr ?? post.category
                )}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mt-6 font-serif text-3xl font-bold leading-tight tracking-tight text-olive sm:text-4xl md:text-5xl"
            >
              {post.title}
            </motion.h1>

            {/* Meta row: date, location */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              <span
                className="inline-flex items-center gap-2 font-sans text-sm"
                style={{ color: "var(--foreground)", opacity: 0.6 }}
              >
                <Calendar className="h-4 w-4 text-copper" />
                <time dateTime={post.date}>{formattedDate}</time>
              </span>
              {post.location && (
                <span
                  className="inline-flex items-center gap-2 font-sans text-sm"
                  style={{ color: "var(--foreground)", opacity: 0.6 }}
                >
                  <MapPin className="h-4 w-4 text-copper" />
                  {post.location}
                </span>
              )}
              <span
                className="inline-flex items-center gap-2 font-sans text-sm"
                style={{ color: "var(--foreground)", opacity: 0.6 }}
              >
                <Tag className="h-4 w-4 text-copper" />
                {t(
                  categoryLabels[post.category]?.en ?? post.category,
                  categoryLabels[post.category]?.tr ?? post.category
                )}
              </span>
            </motion.div>

            {/* Decorative divider */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <div
                className="h-[2px] w-full rounded-full"
                style={{ backgroundColor: "var(--card-border)" }}
              />
              <div
                className="mt-[-2px] h-[2px] w-24 rounded-full"
                style={{ backgroundColor: "#B87333" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Content Area ─── */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose-custom"
          >
            {/* Blog content */}
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              {/* Excerpt as lead paragraph */}
              <p
                className="mb-8 font-serif text-lg italic leading-relaxed"
                style={{ color: "var(--foreground)", opacity: 0.8 }}
              >
                {post.excerpt}
              </p>

              {/* Main content */}
              <div
                className="space-y-6 font-sans text-base leading-relaxed"
                style={{ color: "var(--foreground)", opacity: 0.85 }}
              >
                {post.content.split("\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.article>

          {/* ─── Share Buttons ─── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <p
                className="mb-4 font-sans text-sm font-medium"
                style={{ color: "var(--foreground)", opacity: 0.6 }}
              >
                {t("Share this post", "Bu yazıyı paylaş")}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm transition-all duration-200 hover:bg-olive hover:text-cream hover:border-olive"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--foreground)",
                  }}
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm transition-all duration-200 hover:bg-olive hover:text-cream hover:border-olive"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--foreground)",
                  }}
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm transition-all duration-200 hover:bg-olive hover:text-cream hover:border-olive"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--foreground)",
                  }}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm transition-all duration-200 hover:bg-copper hover:text-cream hover:border-copper cursor-pointer"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--foreground)",
                  }}
                >
                  <Link2 className="h-4 w-4" />
                  {t("Copy link", "Bağlantıyı kopyala")}
                </button>
              </div>
            </div>
          </motion.div>

          {/* ─── Back to Blog CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-olive px-8 py-3 font-sans text-sm font-medium text-cream transition-all duration-200 hover:bg-olive-light hover:shadow-lg"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("All Blog Posts", "Tüm Blog Yazıları")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-16 md:h-24" />
    </div>
  );
}
