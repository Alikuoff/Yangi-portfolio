"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Language, languages, translations } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const defaultLanguage: Language = "en"

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && Object.keys(languages).includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0] as Language
      if (Object.keys(languages).includes(browserLang)) {
        setLanguageState(browserLang)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    if (!mounted) return key

    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback to English if key not found
        let fallback = translations["en"]
        for (const fk of keys) {
          if (fallback && typeof fallback === "object" && fk in fallback) {
            fallback = fallback[fk]
          } else {
            return key
          }
        }
        return typeof fallback === "string" ? fallback : key
      }
    }

    return typeof value === "string" ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

