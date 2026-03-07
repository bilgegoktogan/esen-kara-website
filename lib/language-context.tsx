"use client";

import { createContext, useContext, useCallback, type ReactNode } from "react";

interface LanguageContextType {
  lang: "en";
  t: (en: string, tr?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = useCallback((en: string) => en, []);

  return (
    <LanguageContext.Provider value={{ lang: "en", t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
