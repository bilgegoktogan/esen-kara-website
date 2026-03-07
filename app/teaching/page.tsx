"use client";

import { useLanguage } from "@/lib/language-context";
import { useCourses } from "@/lib/sanity/useSanityData";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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

export default function TeachingPage() {
  const { t } = useLanguage();
  const courses = useCourses();

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
              {t("Teaching", "Öğretim")}
            </h1>
            <div
              className="mt-4 h-1 w-20 rounded-full"
              style={{ backgroundColor: "#B87333" }}
            />
            <p className="mt-6 max-w-2xl font-sans text-lg text-ink-light leading-relaxed">
              {t(
                "I teach courses at both graduate and undergraduate levels in the areas of Postcolonial Literature and Multiculturalism, Turkish Literature in a Comparative Context, and Contemporary American Literature.",
                "Lisans ve lisansüstü düzeylerde Postkolonyal Edebiyat ve Çokkültürlülük, Karşılaştırmalı Bağlamda Türk Edebiyatı ve Çağdaş Amerikan Edebiyatı alanlarında dersler vermekteyim."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
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
                {t("Courses", "Dersler")}
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <h4
                  className="font-serif text-xl font-semibold leading-snug"
                  style={{ color: "var(--foreground)" }}
                >
                  {course.name}
                </h4>

                <div
                  className="mt-3 h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: "#B87333" }}
                />

                <p className="mt-4 text-sm leading-relaxed text-ink-light">
                  {course.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-16 md:h-24" />
    </div>
  );
}
