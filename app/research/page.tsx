"use client";

import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ResearchPage() {
  const { t } = useLanguage();

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
                    One area of my research focuses on nineteenth-century American travel writing about the Ottoman Empire. I study travel narratives written by American travelers, missionaries, merchants, diplomats, and long-term residents between the late eighteenth and early twentieth centuries. With a particular focus on the port city of İzmir, this work examines descriptions of urban life, everyday encounters, and cross-cultural interactions in the Ottoman Mediterranean. Reading these texts alongside archival materials allows me to trace networks of mobility, recurring routes, and spaces of contact that connected American actors with Ottoman urban environments. This research also incorporates digital humanities methods, including the spatial mapping of places, actors, and movements mentioned in travel narratives in order to visualize patterns of encounter and mobility in the nineteenth-century Mediterranean world.
                  </p>
                  <p>
                    Another area of my research engages with memory studies in modern and contemporary literature. I focus on literary representations of individual and collective memory, particularly in relation to trauma, migration, displacement, and historical rupture. Drawing on approaches from memory studies and affect theory, my work explores the narrative construction of memory and the ways literary texts revisit and reinterpret the past within broader cultural and historical contexts. I am particularly interested in the relationship between memory, space, and affect, and in the ways literature contributes to the formation of cultural memory.
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
