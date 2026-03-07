"use client";

import { useLanguage } from "@/lib/language-context";
import { usePublications } from "@/lib/sanity/useSanityData";
import type { Publication } from "@/lib/data";
import { motion } from "framer-motion";
import { Filter, ExternalLink } from "lucide-react";
import { useState } from "react";

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

type TypeFilter = "all" | "article" | "chapter";

export default function PublicationsPage() {
  const { t } = useLanguage();
  const publications = usePublications();
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [fieldFilter, setFieldFilter] = useState<string>("all");
  // Gather unique fields from all publications
  const allFields = Array.from(
    new Set(publications.flatMap((p) => p.field))
  ).sort();

  // Filter publications
  const filteredPublications = publications.filter((pub) => {
    const matchesType = typeFilter === "all" || pub.type === typeFilter;
    const matchesField = fieldFilter === "all" || pub.field.includes(fieldFilter);
    return matchesType && matchesField;
  });

  const typeFilterOptions: { key: TypeFilter; labelEn: string; labelTr: string }[] = [
    { key: "all", labelEn: "All", labelTr: "Tümü" },
    { key: "article", labelEn: "Journal Articles", labelTr: "Dergi Makaleleri" },
    { key: "chapter", labelEn: "Book Chapters", labelTr: "Kitap Bölümleri" },
  ];

  const getTypeBadge = (type: Publication["type"]) => {
    switch (type) {
      case "article":
        return { labelEn: "Journal Article", labelTr: "Dergi Makalesi" };
      case "chapter":
        return { labelEn: "Book Chapter", labelTr: "Kitap Bölümü" };
      default:
        return { labelEn: type, labelTr: type };
    }
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Page Header */}
      <section className="px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-olive">
              {t("Publications", "Yayınlar")}
            </h1>
            <div
              className="mt-4 h-1 w-20 rounded-full"
              style={{ backgroundColor: "#B87333" }}
            />
            <p className="mt-6 max-w-2xl font-sans text-lg text-ink-light leading-relaxed">
              {t(
                "A selection of my academic publications spanning comparative literature, memory studies, ecocriticism, and critical urban theory.",
                "Karşılaştırmalı edebiyat, bellek çalışmaları, ekoeleştiri ve eleştirel kent kuramı alanlarındaki akademik yayınlarımdan bir seçki."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            {/* Type Filters */}
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-copper shrink-0" />
              <div className="flex flex-wrap gap-2">
                {typeFilterOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setTypeFilter(opt.key)}
                    className="rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200"
                    style={{
                      backgroundColor:
                        typeFilter === opt.key ? "#B87333" : "var(--card-bg)",
                      color: typeFilter === opt.key ? "#F5F0EB" : "var(--foreground)",
                      border:
                        typeFilter === opt.key
                          ? "1px solid #B87333"
                          : "1px solid var(--card-border)",
                    }}
                  >
                    {t(opt.labelEn, opt.labelTr)}
                  </button>
                ))}
              </div>
            </div>

            {/* Field Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFieldFilter("all")}
                className="rounded-full px-3 py-1 text-xs font-medium transition-all duration-200"
                style={{
                  backgroundColor:
                    fieldFilter === "all" ? "#B87333" : "var(--card-bg)",
                  color: fieldFilter === "all" ? "#F5F0EB" : "var(--foreground)",
                  border:
                    fieldFilter === "all"
                      ? "1px solid #B87333"
                      : "1px solid var(--card-border)",
                }}
              >
                {t("All Fields", "Tüm Alanlar")}
              </button>
              {allFields.map((field) => (
                <button
                  key={field}
                  onClick={() => setFieldFilter(field)}
                  className="rounded-full px-3 py-1 text-xs font-medium transition-all duration-200"
                  style={{
                    backgroundColor:
                      fieldFilter === field ? "#B87333" : "var(--card-bg)",
                    color: fieldFilter === field ? "#F5F0EB" : "var(--foreground)",
                    border:
                      fieldFilter === field
                        ? "1px solid #B87333"
                        : "1px solid var(--card-border)",
                  }}
                >
                  {field}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {filteredPublications.length === 0 ? (
              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
                className="py-12 text-center text-ink-light"
              >
                {t(
                  "No publications match the selected filters.",
                  "Seçilen filtrelere uyan yayın bulunamadı."
                )}
              </motion.p>
            ) : (
              filteredPublications.map((pub) => {
                const badge = getTypeBadge(pub.type);

                return (
                  <motion.div
                    key={pub.id}
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                    className="group rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:p-6"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <div className="flex gap-4 md:gap-6">
                      {/* Year Badge */}
                      <div className="shrink-0">
                        <span
                          className="inline-flex h-12 w-12 items-center justify-center rounded-lg font-serif text-sm font-bold md:h-14 md:w-14 md:text-base"
                          style={{
                            backgroundColor: "rgba(45, 74, 62, 0.08)",
                            color: "#2D4A3E",
                          }}
                        >
                          {pub.year}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        {/* Top row: type badge */}
                        <div className="mb-2 flex items-center gap-2">
                          <span
                            className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                            style={{
                              backgroundColor:
                                pub.type === "chapter"
                                  ? "rgba(184, 115, 51, 0.15)"
                                  : "rgba(45, 74, 62, 0.1)",
                              color:
                                pub.type === "chapter" ? "#B87333" : "#2D4A3E",
                            }}
                          >
                            {t(badge.labelEn, badge.labelTr)}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="font-serif text-base font-semibold leading-snug md:text-lg"
                          style={{ color: "var(--foreground)" }}
                        >
                          {pub.title}
                        </h3>

                        {/* Journal */}
                        {pub.journal && (
                          <p
                            className="mt-1 text-sm italic"
                            style={{ color: "#B87333" }}
                          >
                            {pub.journal}
                          </p>
                        )}

                        {/* Co-authors */}
                        {pub.coAuthors && pub.coAuthors.length > 0 && (
                          <p className="mt-1 text-sm text-ink-light">
                            {t("with", "ile")}{" "}
                            {pub.coAuthors.join(", ")}
                          </p>
                        )}

                        {/* Field Tags */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {pub.field.map((f) => (
                            <span
                              key={f}
                              className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                              style={{
                                backgroundColor: "rgba(45, 74, 62, 0.08)",
                                color: "#2D4A3E",
                              }}
                            >
                              {f}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        {pub.url && (
                          <div className="mt-3">
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 hover:opacity-80"
                              style={{
                                backgroundColor: "rgba(184, 115, 51, 0.12)",
                                color: "#B87333",
                              }}
                            >
                              <ExternalLink size={12} />
                              {t("View Publication", "Yayını Görüntüle")}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </div>
      </section>

      {/* Academic Profiles Section */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h2
                className="font-serif text-2xl font-bold md:text-3xl"
                style={{ color: "var(--foreground)" }}
              >
                {t("Academic Profiles", "Akademik Profiller")}
              </h2>
              <div
                className="mt-3 h-1 w-14 rounded-full"
                style={{ backgroundColor: "#B87333" }}
              />
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                {t(
                  "Find my work across academic platforms.",
                  "Akademik platformlarda çalışmalarımı bulabilirsiniz."
                )}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {/* AVESİS */}
                <a
                  href="https://avesis.yasar.edu.tr/esen.kara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                    style={{
                      backgroundColor: "rgba(184, 115, 51, 0.12)",
                      color: "#B87333",
                    }}
                  >
                    AV
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                      AVESİS
                    </p>
                    <p className="truncate text-xs text-ink-light">
                      {t("Academic profile", "Akademik profil")}
                    </p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-ink-lighter transition-colors duration-200 group-hover/link:text-copper"
                  />
                </a>

                {/* ResearchGate */}
                <a
                  href="https://www.researchgate.net/profile/Esen-Kara-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                    style={{
                      backgroundColor: "rgba(45, 74, 62, 0.1)",
                      color: "#2D4A3E",
                    }}
                  >
                    RG
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                      ResearchGate
                    </p>
                    <p className="truncate text-xs text-ink-light">
                      {t("Full-text publications", "Tam metin yayınlar")}
                    </p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-ink-lighter transition-colors duration-200 group-hover/link:text-copper"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.google.com/search?q=instagram+esenkara_&oq=instagram+esenkara_&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRiPAtIBCDQ4MDJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                    style={{
                      backgroundColor: "rgba(184, 115, 51, 0.12)",
                      color: "#B87333",
                    }}
                  >
                    IG
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                      Instagram
                    </p>
                    <p className="truncate text-xs text-ink-light">
                      @esenkara_
                    </p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-ink-lighter transition-colors duration-200 group-hover/link:text-copper"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-16 md:h-24" />
    </div>
  );
}
