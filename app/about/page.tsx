"use client";

import { useLanguage } from "@/lib/language-context";
import { useSiteSettings, useEducation } from "@/lib/sanity/useSanityData";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const siteConfig = useSiteSettings();
  const education = useEducation();

  const positions = [
    {
      role: t(
        "Assistant Professor, English Language and Literature",
        "Dr. Ogretim Uyesi, Ingiliz Dili ve Edebiyati"
      ),
      institution: t("Yasar University", "Yasar Universitesi"),
      location: t("Izmir, Turkey", "Izmir, Turkiye"),
      period: "2008 --",
      current: true,
    },
    {
      role: t("Visiting Scholar", "Ziyaretçi Araştırmacı"),
      institution: "Dartmouth College",
      location: t("Hanover, New Hampshire, USA", "Hanover, New Hampshire, ABD"),
      period: "2023 -- 2024",
      current: false,
    },
  ];

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
              {t("About", "Hakkımda")}
            </h1>
            <div
              className="mt-4 h-1 w-20 rounded-full"
              style={{ backgroundColor: "#B87333" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="h-7 w-7 text-copper" />
              <h2 className="font-serif text-3xl font-bold text-olive md:text-4xl">
                {t("Academic Positions", "Akademik Gorevler")}
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {positions.map((pos, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl p-6 transition-all duration-300 hover:shadow-lg md:p-8"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                {pos.current && (
                  <span
                    className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(45, 74, 62, 0.1)",
                      color: "#2D4A3E",
                    }}
                  >
                    <span
                      className="h-2 w-2 rounded-full animate-pulse"
                      style={{ backgroundColor: "#2D4A3E" }}
                    />
                    {t("Current", "Guncel")}
                  </span>
                )}

                <div
                  className="mb-4 h-1 w-12 rounded-full"
                  style={{ backgroundColor: "#B87333" }}
                />

                <h3
                  className="font-serif text-xl font-semibold leading-snug md:text-2xl"
                  style={{ color: "var(--foreground)" }}
                >
                  {pos.role}
                </h3>

                <p className="mt-3 text-base font-medium text-olive">
                  {pos.institution}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-lighter">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-copper" />
                    {pos.location}
                  </span>
                  {pos.period && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-1 w-1 rounded-full"
                        style={{ backgroundColor: "#B87333" }}
                      />
                      {pos.period}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="h-7 w-7 text-copper" />
              <h2 className="font-serif text-3xl font-bold text-olive md:text-4xl">
                {t("Education", "Egitim")}
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Vertical timeline line */}
            <div
              className="absolute left-[15px] top-2 bottom-2 w-[2px] md:left-[19px]"
              style={{ backgroundColor: "var(--card-border)" }}
            />

            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6 pl-2 md:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="h-8 w-8 rounded-full border-[3px] flex items-center justify-center md:h-10 md:w-10"
                      style={{
                        borderColor: "#B87333",
                        backgroundColor: "var(--background)",
                      }}
                    >
                      <div
                        className="h-3 w-3 rounded-full md:h-3.5 md:w-3.5"
                        style={{ backgroundColor: "#B87333" }}
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 rounded-xl p-6 transition-shadow duration-300 hover:shadow-lg md:p-8"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span
                        className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
                        style={{ backgroundColor: "#2D4A3E" }}
                      >
                        {lang === "en" ? edu.degree.en : edu.degree.tr}
                      </span>
                    </div>
                    <h3
                      className="mt-3 font-serif text-xl font-semibold md:text-2xl"
                      style={{ color: "var(--foreground)" }}
                    >
                      {lang === "en" ? edu.field.en : edu.field.tr}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-ink-lighter">
                      <MapPin className="h-4 w-4 text-copper" />
                      {lang === "en" ? edu.university.en : edu.university.tr}
                    </p>
                    {edu.thesis && (
                      <p className="mt-4 text-sm italic leading-relaxed text-ink-light">
                        {t("Thesis: ", "Tez: ")}
                        {lang === "en" ? edu.thesis.en : edu.thesis.tr}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-16 md:h-24" />
    </div>
  );
}
