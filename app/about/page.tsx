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
      role: t("Courtesy Appointment", "Misafir Ogretim Uyesi"),
      institution: "Dartmouth College",
      location: t("Hanover, New Hampshire, USA", "Hanover, New Hampshire, ABD"),
      period: "",
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
              {t("About", "Hakkimda")}
            </h1>
            <div
              className="mt-4 h-1 w-20 rounded-full"
              style={{ backgroundColor: "#B87333" }}
            />
            <p className="mt-6 max-w-xl font-sans text-lg text-ink-light leading-relaxed">
              {t(
                "Scholar, teacher, and explorer of the intersections between literature, cities, and memory.",
                "Edebiyat, kent ve bellek kesisimlerinin arastirmacisi, ogretmen ve kasifleri."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section -- Split Layout */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-12 md:grid-cols-5"
          >
            {/* Photo Placeholder */}
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(184, 115, 51, 0.1)" }}
                  >
                    <span className="text-3xl font-serif font-bold text-copper">
                      EK
                    </span>
                  </div>
                  <p className="text-sm text-ink-lighter text-center">
                    {t("Photo coming soon", "Fotograf yakinda eklenecek")}
                  </p>
                </div>
                {/* Decorative corner accents */}
                <div
                  className="absolute top-0 left-0 h-16 w-16"
                  style={{
                    borderTop: "3px solid #B87333",
                    borderLeft: "3px solid #B87333",
                    borderTopLeftRadius: "1rem",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 h-16 w-16"
                  style={{
                    borderBottom: "3px solid #B87333",
                    borderRight: "3px solid #B87333",
                    borderBottomRightRadius: "1rem",
                  }}
                />
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-3 flex flex-col justify-center"
            >
              <h2 className="font-serif text-3xl font-bold text-olive md:text-4xl">
                {siteConfig.name}
              </h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-copper">
                {t(
                  siteConfig.university.department.en,
                  siteConfig.university.department.tr
                )}
              </p>

              <div className="mt-8 space-y-5 text-base leading-relaxed">
                <p style={{ color: "var(--foreground)" }}>
                  {t(
                    "I am an Assistant Professor of English Language and Literature at Yasar University in Izmir, Turkey. My academic journey began at Ankara University, where I studied English Language and Literature, and continued at Dokuz Eylul University, where I completed both my master's and doctoral studies in American Culture and Literature.",
                    "Izmir'deki Yasar Universitesi'nde Ingiliz Dili ve Edebiyati Bolumu'nde Dr. Ogretim Uyesi olarak gorev yapiyorum. Akademik yolculugum Ankara Universitesi'nde Ingiliz Dili ve Edebiyati egitimimle basladi ve Dokuz Eylul Universitesi'nde Amerikan Kulturu ve Edebiyati alaninda hem yuksek lisans hem de doktora calismalarimla devam etti."
                  )}
                </p>
                <p style={{ color: "var(--foreground)" }}>
                  {t(
                    "My research sits at the crossroads of comparative literature, memory studies, ecocriticism, and critical urban theory. I am fascinated by how literature imagines and reimagines urban spaces, ecological relations, and collective memory. My doctoral work focused on the 'Right to the City' movement and its representations in the transnational American novel, a theme that continues to shape my scholarship.",
                    "Arastirmalarim karsilastirmali edebiyat, bellek calismalari, ekoelestiri ve elestirel kent kuraminin kesisim noktalarinda yer aliyor. Edebiyatin kentsel mekanlari, ekolojik iliskileri ve kolektif bellegi nasil tasavvur ettigi ve yeniden kurguladi beni derinden etkiliyor. Doktora calismam, ulusotesi Amerikan romaninda 'Kente Hakki' hareketi ve temsillerine odaklanmisti ve bu tema akademik calismalarima yon vermeye devam ediyor."
                  )}
                </p>
                <p style={{ color: "var(--foreground)" }}>
                  {t(
                    "Beyond the academy, I believe in the power of literature to bridge cultures and languages. Whether I'm exploring how a Turkish novel reimagines flanerie through a feminine consciousness or examining ecological memory in postcolonial fiction, my work is driven by a conviction that stories shape how we understand our cities, our environments, and ourselves.",
                    "Akademinin otesinde, edebiyatin kulturleri ve dilleri birbirine baglama gucune inaniyorum. Ister bir Turk romaninin flanozlugu disil bir bilincle nasil yeniden kurguledigini arastiriyorum, ister post-kolonyal kurguda ekolojik bellegi inceliyorum; calismalarimi, hikayelerin kentlerimizi, cevrelerimizi ve kendimizi anlama bicimllerimizi sekillendirdigi inanci yonlendiriyor."
                  )}
                </p>
              </div>
            </motion.div>
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

      {/* Personal / Research Passions Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
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
              {/* Decorative background element */}
              <div
                className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-10"
                style={{ backgroundColor: "#B87333" }}
              />
              <div
                className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-10"
                style={{ backgroundColor: "#B87333" }}
              />

              <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold text-cream md:text-4xl">
                  {t("What Drives My Work", "Calismalarimi Ne Yonlendiriyor")}
                </h2>
                <div
                  className="mt-4 h-1 w-16 rounded-full"
                  style={{ backgroundColor: "#B87333" }}
                />

                <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/90 md:text-lg md:leading-relaxed">
                  <p>
                    {t(
                      "I am drawn to the stories that emerge at the margins -- where languages meet, where cities transform, where memory and landscape intertwine. My research is rooted in a deep curiosity about how literary works can illuminate the lived experience of urban space, ecological change, and cultural displacement.",
                      "Beni cesitli sinirlarda ortaya cikan hikayeler cezbediyor -- dillerin bulusttugu, kentlerin donustugu, bellek ve peyzajin ic ice gectigi yerler. Arastirmalarim, edebi eserlerin kentsel mekanin yasanmis deneyimini, ekolojik degisimi ve kulturel yerinden edilmeyi nasil aydinlatabileceigine dair derin bir meraktan besleniyor."
                    )}
                  </p>
                  <p>
                    {t(
                      "Whether it is tracing the figure of the flaneuse through the streets of Istanbul, or examining how postcolonial novels reimagine the right to belong in a global city, I believe that literature offers us essential tools for understanding the world we inhabit -- and the worlds we might yet create.",
                      "Ister Istanbul sokaklarinda bir flanoz figuru izliyor olayim, ister post-kolonyal romanlarin kuresel bir kentte ait olma hakkini nasil yeniden tasavvur ettigini inceliyorum; edebiyatin, icinde yasadigimiz dunyayi -- ve henuz yaratabilecegimiz dunyalari -- anlamak icin bize temel araclar sunduguna inaniyorum."
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
