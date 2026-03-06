"use client";

import { useLanguage } from "@/lib/language-context";
import { useCourses } from "@/lib/sanity/useSanityData";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users } from "lucide-react";

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

  const undergraduate = courses.filter((c) => c.level === "undergraduate");
  const graduate = courses.filter((c) => c.level === "graduate");

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
                "Connecting students with diverse literary traditions, fostering critical thinking, and encouraging cross-cultural dialogue.",
                "Öğrencileri farklı edebi geleneklerle buluşturmak, eleştirel düşünceyi geliştirmek ve kültürlerarası diyaloğu teşvik etmek."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-7 w-7 text-copper" />
              <h2 className="font-serif text-3xl font-bold text-olive md:text-4xl">
                {t("Teaching Philosophy", "Öğretim Felsefem")}
              </h2>
            </div>

            <div
              className="rounded-xl p-6 md:p-10"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="space-y-5 text-base leading-relaxed md:text-lg md:leading-relaxed">
                <p style={{ color: "var(--foreground)" }}>
                  {t(
                    "I believe that literature is a powerful bridge between cultures, languages, and ways of seeing the world. My teaching approach centers on connecting students with diverse literary traditions -- from postcolonial fiction and comparative literature to ecocriticism and memory studies -- so that they can develop a richer, more nuanced understanding of the human experience across borders.",
                    "Edebiyatın kültürler, diller ve dünyayı görme biçimleri arasında güçlü bir köprü olduğuna inanıyorum. Öğretim yaklaşımım, öğrencileri post-kolonyal kurgulardan karşılaştırmalı edebiyata, ekoeleştiriden bellek çalışmalarına uzanan farklı edebi geleneklerle buluşturarak, sınırları aşan insan deneyiminin daha zengin ve çok katmanlı bir kavrayışını geliştirmelerini sağlamaya odaklanıyor."
                  )}
                </p>
                <p style={{ color: "var(--foreground)" }}>
                  {t(
                    "In the classroom, I foster critical thinking by encouraging students to question received narratives, engage deeply with texts, and discover unexpected connections between literary works from different eras and geographies. Through seminar discussions, close reading exercises, and collaborative projects, I aim to create a space where cross-cultural dialogue thrives -- where students learn not only to analyze literature, but to appreciate the transformative power of storytelling itself.",
                    "Sınıfta, öğrencileri yerleşik anlatıları sorgulamaya, metinlerle derinlemesine etkileşime girmeye ve farklı dönem ve coğrafyalardan edebi eserler arasında beklenmedik bağlantılar keşfetmeye teşvik ederek eleştirel düşünceyi geliştiriyorum. Seminer tartışmaları, yakın okuma çalışmaları ve işbirlikli projeler aracılığıyla, kültürlerarası diyaloğun serpildiği bir ortam yaratmayı hedefliyorum -- öğrencilerin yalnızca edebiyatı analiz etmeyi değil, hikaye anlatımının dönüştürücü gücünü de takdir etmeyi öğrendiği bir alan."
                  )}
                </p>
              </div>
            </div>
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

          {/* Undergraduate Courses */}
          <div className="mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-8 font-serif text-2xl font-semibold text-olive md:text-3xl">
                {t("Undergraduate", "Lisans")}
              </h3>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {undergraduate.map((course, index) => (
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
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
                    style={{ backgroundColor: "#2D4A3E" }}
                  >
                    {t("Undergraduate", "Lisans")}
                  </span>

                  <h4
                    className="mt-4 font-serif text-xl font-semibold leading-snug"
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

          {/* Graduate Courses */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-8 font-serif text-2xl font-semibold text-olive md:text-3xl">
                {t("Graduate", "Lisansüstü")}
              </h3>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {graduate.map((course, index) => (
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
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      backgroundColor: "rgba(184, 115, 51, 0.15)",
                      color: "#B87333",
                    }}
                  >
                    {t("Graduate", "Lisansüstü")}
                  </span>

                  <h4
                    className="mt-4 font-serif text-xl font-semibold leading-snug"
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
        </div>
      </section>

      {/* Mentoring Section */}
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
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-7 w-7 text-copper-light" />
                  <h2 className="font-serif text-3xl font-bold text-cream md:text-4xl">
                    {t("Mentoring & Supervision", "Danışmanlık ve Tez Yönetimi")}
                  </h2>
                </div>
                <div
                  className="h-1 w-16 rounded-full"
                  style={{ backgroundColor: "#B87333" }}
                />

                <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/90 md:text-lg md:leading-relaxed">
                  <p>
                    {t(
                      "I actively supervise graduate theses and mentor students at both the undergraduate and graduate levels. I welcome students who are interested in exploring topics related to comparative literature, postcolonial studies, ecocriticism, memory and literature, and critical urban theory. My approach to mentoring emphasizes intellectual curiosity, independent thinking, and rigorous scholarly practice.",
                      "Lisans ve lisansüstü düzeylerde aktif olarak tez danışmanlığı yapıyor ve öğrencilere mentorluk ediyorum. Karşılaştırmalı edebiyat, post-kolonyal çalışmalar, ekoeleştiri, bellek ve edebiyat ile eleştirel kent kuramı konularında çalışmak isteyen öğrencileri memnuniyetle karşılıyorum. Mentorluk yaklaşımım entelektüel merak, bağımsız düşünce ve titiz akademik pratiği ön plana çıkarıyor."
                    )}
                  </p>
                  <p>
                    {t(
                      "If you are a prospective student interested in working with me, feel free to reach out to discuss potential research directions and supervision opportunities.",
                      "Benimle çalışmak isteyen bir öğrenci adayıysanız, olası araştırma yönlerini ve danışmanlık fırsatlarını görüşmek için benimle iletişime geçmekten çekinmeyin."
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
