"use client";

import { useLanguage } from "@/lib/language-context";
import { researchAreas, publications } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

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

export default function ResearchPage() {
  const { lang, t } = useLanguage();

  const getPublicationTitle = (pubId: string): string | null => {
    const pub = publications.find((p) => p.id === pubId);
    return pub ? pub.title : null;
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Page Header */}
      <section className="px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-olive">
              {t("Research", "Ara\u015Ft\u0131rma")}
            </h1>
            <div
              className="mt-4 h-1 w-20 rounded-full"
              style={{ backgroundColor: "#B87333" }}
            />
            <p className="mt-6 max-w-2xl font-sans text-lg text-ink-light leading-relaxed">
              {t(
                "My research explores how literature imagines and reimagines urban spaces, ecological relations, and collective memory. Working across languages and traditions, I investigate the intersections of comparative literature, memory studies, ecocriticism, and critical urban theory to understand the stories that shape our relationship with the world.",
                "Ara\u015Ft\u0131rmalar\u0131m, edebiyat\u0131n kentsel mek\u00E2nlar\u0131, ekolojik ili\u015Fkileri ve kolektif belle\u011Fi nas\u0131l tasavvur etti\u011Fini ve yeniden kurgulad\u0131\u011F\u0131n\u0131 inceliyor. Diller ve gelenekler aras\u0131nda \u00E7al\u0131\u015Farak, kar\u015F\u0131la\u015Ft\u0131rmal\u0131 edebiyat, bellek \u00E7al\u0131\u015Fmalar\u0131, ekoele\u015Ftiri ve ele\u015Ftirel kent kuram\u0131n\u0131n kesi\u015Fim noktalar\u0131n\u0131, d\u00FCnyayla ili\u015Fkimizi \u015Fekillendiren hikayeleri anlamak i\u00E7in ara\u015Ft\u0131r\u0131yorum."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {researchAreas.map((area) => {
              const relatedPubs = area.publications
                .map((pubId) => ({
                  id: pubId,
                  title: getPublicationTitle(pubId),
                }))
                .filter((p) => p.title !== null);

              return (
                <motion.div
                  key={area.id}
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                  className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  {/* Icon */}
                  <div className="mb-4 text-4xl">{area.icon}</div>

                  {/* Title */}
                  <h3
                    className="font-serif text-xl font-semibold md:text-2xl"
                    style={{ color: "var(--foreground)" }}
                  >
                    {lang === "en" ? area.title : area.titleTr}
                  </h3>

                  {/* Copper accent line */}
                  <div
                    className="mt-3 h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: "#B87333" }}
                  />

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-ink-light">
                    {lang === "en" ? area.description : area.descriptionTr}
                  </p>

                  {/* Related Publications */}
                  {relatedPubs.length > 0 && (
                    <div className="mt-6 border-t pt-4" style={{ borderColor: "var(--card-border)" }}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-copper">
                        {t("Related Publications", "\u0130lgili Yay\u0131nlar")}
                      </p>
                      <ul className="space-y-2">
                        {relatedPubs.map((pub) => (
                          <li key={pub.id}>
                            <Link
                              href="/publications"
                              className="text-sm leading-snug text-ink-lighter transition-colors duration-200 hover:text-copper"
                            >
                              {pub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative overflow-hidden rounded-2xl p-8 md:p-12"
              style={{ backgroundColor: "#2D4A3E" }}
            >
              {/* Decorative background elements */}
              <div
                className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-10"
                style={{ backgroundColor: "#B87333" }}
              />
              <div
                className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-10"
                style={{ backgroundColor: "#B87333" }}
              />

              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-copper-light">
                  {t("Current Projects", "G\u00FCncel Projeler")}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-cream md:text-4xl">
                  {t("Ongoing Research", "Devam Eden Ara\u015Ft\u0131rmalar")}
                </h2>
                <div
                  className="mt-4 h-1 w-16 rounded-full"
                  style={{ backgroundColor: "#B87333" }}
                />

                <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/90 md:text-lg md:leading-relaxed">
                  <p>
                    {t(
                      "My current post-doctoral research focuses on the intersections of contemporary Turkish literature and critical posthumanism. I am exploring how Turkish women writers engage with ecological consciousness, non-human agency, and the entanglement of memory with landscape. This work builds on my earlier investigations into ecocriticism and memory studies, extending them into new theoretical terrain shaped by posthumanist and new materialist thought.",
                      "G\u00FCncel doktora sonras\u0131 ara\u015Ft\u0131rmam, \u00E7a\u011Fda\u015F T\u00FCrk edebiyat\u0131 ile ele\u015Ftirel posth\u00FCmanizmin kesi\u015Fim noktalar\u0131na odaklan\u0131yor. T\u00FCrk kad\u0131n yazarlar\u0131n ekolojik bilin\u00E7, insan-d\u0131\u015F\u0131 faillik ve belle\u011Fin peyzajla i\u00E7 i\u00E7e ge\u00E7i\u015Fiyle nas\u0131l etkile\u015Fime girdi\u011Fini ara\u015Ft\u0131r\u0131yorum. Bu \u00E7al\u0131\u015Fma, ekoele\u015Ftiri ve bellek \u00E7al\u0131\u015Fmalar\u0131 \u00FCzerine \u00F6nceki incelemelerime dayanarak, bunlar\u0131 posth\u00FCmanist ve yeni materyalist d\u00FC\u015F\u00FCnce taraf\u0131ndan \u015Fekillendirilen yeni kuramsal alanlara ta\u015F\u0131yor."
                    )}
                  </p>
                  <p>
                    {t(
                      "I am also continuing to develop my comparative work on literary representations of the city, examining how novels from different cultural traditions reimagine urban space as a site of resistance, belonging, and ecological possibility.",
                      "Ayn\u0131 zamanda, kentin edebi temsillerine y\u00F6nelik kar\u015F\u0131la\u015Ft\u0131rmal\u0131 \u00E7al\u0131\u015Fmalar\u0131m\u0131 geli\u015Ftirmeye devam ediyor; farkl\u0131 k\u00FClt\u00FCrel geleneklerden gelen romanlar\u0131n kentsel mek\u00E2n\u0131 bir direni\u015F, aidiyet ve ekolojik imk\u00E2n alan\u0131 olarak nas\u0131l yeniden tasavvur etti\u011Fini inceliyorum."
                    )}
                  </p>
                </div>
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
