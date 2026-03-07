"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, GraduationCap, Globe } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) return null;

  return (
    <footer className="border-t mt-20" style={{ borderColor: "var(--card-border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">
              <span className="text-copper">E</span>sen <span className="text-copper">K</span>ara
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              Assistant Professor, English Language and Literature
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              Yaşar University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider mb-3 text-copper">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/publications" className="hover:text-copper transition-colors">
                Publications
              </Link>
              <Link href="/research" className="hover:text-copper transition-colors">
                Research
              </Link>
              <Link href="/blog" className="hover:text-copper transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-copper transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider mb-3 text-copper">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://avesis.yasar.edu.tr/esen.kara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-copper/10 transition-colors"
                aria-label="AVESİS"
              >
                <GraduationCap size={20} />
              </a>
              <a
                href="https://www.researchgate.net/profile/Esen-Kara-2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-copper/10 transition-colors"
                aria-label="ResearchGate"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://www.google.com/search?q=instagram+esenkara_&oq=instagram+esenkara_&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRiPAtIBCDQ4MDJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-copper/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center text-xs"
          style={{ borderColor: "var(--card-border)", color: "var(--foreground)", opacity: 0.5 }}
        >
          © {new Date().getFullYear()} Esen Kara Göktoğan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
