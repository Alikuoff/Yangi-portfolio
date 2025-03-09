"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { motion } from "framer-motion"
import { MessageCircleIcon, GithubIcon, MailIcon } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="block md:hidden">
        <Button variant="ghost" size="icon" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-72 sm:w-80 overflow-visible bg-card/80 backdrop-blur-md border-l border-primary/20"
      >
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left text-primary font-bold relative inline-block">
            Azizjon Alikulov
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </SheetTitle>
          <SheetDescription className="text-left">{t("profession")}</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          {["about", "skills", "projects", "contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <Link
                href={`#${item}`}
                onClick={handleLinkClick}
                className="w-full flex items-center py-3 pl-2 text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 border-l-2 border-transparent hover:border-primary/50"
              >
                {t(item)}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-6"
          >
            <Link href="#contact" onClick={handleLinkClick}>
              <Button className="w-full relative overflow-hidden group">
                <span className="relative z-10">{t("contactMe")}</span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="mt-auto pt-6"
          >
            <div className="flex justify-center gap-4 mt-6">
              {[
                { href: "https://github.com/Alikuoff", icon: <GithubIcon className="h-5 w-5" /> },
                { href: "https://t.me/Alikuoff", icon: <MessageCircleIcon className="h-5 w-5" /> },
                { href: "mailto:alikuloff001@gmail.com", icon: <MailIcon className="h-5 w-5" /> },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-primary/10 border border-primary/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

