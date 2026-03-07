"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  const { t } = useLanguage();

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
              {t("In Texts and In Transit", "Metinlerde ve Yolculukta")}
            </h1>
            <div
              className="mt-4 h-1 w-20 rounded-full"
              style={{ backgroundColor: "#B87333" }}
            />
            <p className="mt-6 max-w-2xl font-sans text-lg text-ink-light leading-relaxed">
              {t(
                "Reflections on literature, travel, and the spaces in between.",
                "Edebiyat, seyahat ve aradaki mekanlar uzerine dusunceler."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p
              className="font-serif text-2xl italic md:text-3xl"
              style={{ color: "var(--foreground)", opacity: 0.5 }}
            >
              {t("Coming soon.", "Yakinda.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-16 md:h-24" />
    </div>
  );
}
