"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, ExternalLink, Instagram, GraduationCap, BookOpen, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { siteConfig } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to a form service (Formspree, Netlify Forms, etc.)
    setSubmitted(true);
  };

  return (
    <div className="px-4 sm:px-6 pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-olive mb-4">
            {t("Contact", "İletişim")}
          </h1>
          <div className="w-16 h-1 rounded-full bg-copper mb-6" />
          <p className="text-lg max-w-2xl" style={{ color: "var(--foreground)", opacity: 0.7 }}>
            {t(
              "I'd love to hear from you. Whether you have questions about my research, potential collaborations, or speaking invitations, feel free to reach out.",
              "Sizden haber almaktan mutluluk duyarım. Araştırmalarım, olası iş birlikleri veya konuşma davetleri hakkında sorularınız varsa, lütfen iletişime geçin."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <div
              className="rounded-xl p-6 md:p-8 border"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-olive" size={28} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-olive mb-2">
                    {t("Message Sent!", "Mesaj Gönderildi!")}
                  </h3>
                  <p style={{ color: "var(--foreground)", opacity: 0.7 }}>
                    {t(
                      "Thank you for reaching out. I'll get back to you soon.",
                      "İletişime geçtiğiniz için teşekkürler. En kısa sürede dönüş yapacağım."
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 px-6 py-2 rounded-lg bg-copper text-white text-sm font-medium hover:bg-copper-light transition-colors"
                  >
                    {t("Send Another Message", "Başka Bir Mesaj Gönder")}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
                        {t("Name", "İsim")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors"
                        style={{
                          backgroundColor: "var(--background)",
                          borderColor: "var(--card-border)",
                          color: "var(--foreground)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
                        {t("Email", "E-posta")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors"
                        style={{
                          backgroundColor: "var(--background)",
                          borderColor: "var(--card-border)",
                          color: "var(--foreground)",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
                      {t("Subject", "Konu")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors"
                      style={{
                        backgroundColor: "var(--background)",
                        borderColor: "var(--card-border)",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
                      {t("Message", "Mesaj")} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-colors resize-none"
                      style={{
                        backgroundColor: "var(--background)",
                        borderColor: "var(--card-border)",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-lg bg-olive text-cream font-medium text-sm hover:bg-olive-light transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {t("Send Message", "Mesaj Gönder")}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-2 space-y-6"
          >
            {/* Email */}
            <motion.div variants={fadeInUp}>
              <div
                className="rounded-xl p-6 border"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                    <Mail className="text-copper" size={20} />
                  </div>
                  <h3 className="font-serif font-semibold">{t("Email", "E-posta")}</h3>
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-copper hover:text-copper-light transition-colors text-sm"
                >
                  {siteConfig.email}
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div variants={fadeInUp}>
              <div
                className="rounded-xl p-6 border"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                    <MapPin className="text-copper" size={20} />
                  </div>
                  <h3 className="font-serif font-semibold">{t("Office", "Ofis")}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.7 }}>
                  {t(siteConfig.university.department.en, siteConfig.university.department.tr)}
                  <br />
                  {t(siteConfig.university.faculty.en, siteConfig.university.faculty.tr)}
                  <br />
                  {t(siteConfig.university.name.en, siteConfig.university.name.tr)}
                  <br />
                  {t("İzmir, Turkey", "İzmir, Türkiye")}
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp}>
              <div
                className="rounded-xl p-6 border"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                <h3 className="font-serif font-semibold mb-4">{t("Find Me Online", "Çevrimiçi Bağlantılar")}</h3>
                <div className="space-y-3">
                  {[
                    { icon: Instagram, label: "Instagram", url: siteConfig.social.instagram },
                    { icon: GraduationCap, label: "Google Scholar", url: siteConfig.social.scholar },
                    { icon: BookOpen, label: "Academia.edu", url: siteConfig.social.academia },
                    { icon: Globe, label: "ResearchGate", url: siteConfig.social.researchgate },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-copper transition-colors group"
                      style={{ color: "var(--foreground)" }}
                    >
                      <link.icon size={18} className="text-copper" />
                      <span>{link.label}</span>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="h-16 md:h-24" />
    </div>
  );
}
