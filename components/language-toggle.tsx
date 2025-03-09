"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { type Language, languages } from "@/lib/i18n/translations"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang)
    toast({
      title: `${t("languageChanged")} ${languages[newLang]}`,
      description: t("preference"),
      duration: 2000,
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change language">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card/80 backdrop-blur-sm border border-primary/20">
        {Object.entries(languages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as Language)}
            className="flex items-center gap-2 cursor-pointer hover:bg-primary/10"
          >
            <span>{name}</span>
            {language === code && <span className="ml-auto text-primary text-xs">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

