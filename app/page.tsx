"use client"

import {
  ArrowDownIcon,
  ArrowRightIcon,
  GithubIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  MessageCircleIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { ProjectFilter } from "@/components/project-filter"
import { SkillsDisplay } from "@/components/skills-display"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useLanguage } from "@/lib/i18n/language-context"
import { motion } from "framer-motion"

export default function Home() {
  return <LanguageWrapper />
}

function LanguageWrapper() {
  return <HomePage />
}

function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Modern glass morphism design */}
      <header className="fixed top-0 z-50 w-full border-b border-primary/10 bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-lg relative">
              <span className="text-primary">Azizjon</span> Alikulov
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {["about", "skills", "projects", "contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={`#${item}`} className="text-sm font-medium relative group">
                  <span className="relative z-10">{t(item)}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
            <Link href="#contact" className="hidden md:inline-flex">
              <Button className="relative overflow-hidden group">
                <span className="relative z-10">{t("contactMe")}</span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="container pt-24 pb-16">
        {/* Hero Section - Modern creative design */}
        <section id="hero" className="py-12 md:py-20 relative overflow-hidden">
          {/* Animated background shapes */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-primary/15 rounded-full blur-lg"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm mb-2">
                {t("hi")}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="text-primary">Azizjon</span> Alikulov
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-foreground">{t("profession")}</h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-md mt-2 bg-card/50 backdrop-blur-sm p-4 rounded-lg border">
                {t("heroDescription")}
              </p>
              <motion.div
                className="flex gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Link
                  href="#projects"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Button className="gap-2 relative overflow-hidden group">
                    <span className="relative z-10">{t("viewProjects")}</span>
                    <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <ArrowDownIcon className="h-4 w-4 relative z-10" />
                  </Button>
                </Link>
                <Link href="https://github.com/Alikuoff" target="_blank">
                  <Button variant="outline" className="gap-2 relative overflow-hidden group border-primary/20">
                    <span className="relative z-10">GitHub</span>
                    <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <GithubIcon className="h-4 w-4 relative z-10" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -z-10 w-80 h-80 border-2 border-primary/30 rounded-full transform -translate-x-2 translate-y-2"></div>
                <div className="absolute -z-10 w-80 h-80 border-2 border-primary/20 rounded-full transform translate-x-2 -translate-y-2"></div>

                <div className="relative h-72 w-72 md:h-80 md:w-80 overflow-hidden rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent border-4 border-primary/30 shadow-xl">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFZ6jc52nHLjQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705239123399?e=2147483647&v=beta&t=7DD4pElkfru5gv_xwKDTrEF6pGTmRZBD6l32d6VHzYc"
                    alt="Azizjon Alikulov"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg border dark:border-zinc-800 flex items-center gap-2 dark:text-white"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="Next.js"
                    width={16}
                    height={16}
                    className="dark:invert"
                  />
                  <span>Next.js</span>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg border dark:border-zinc-800 flex items-center gap-2 dark:text-white"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    width={16}
                    height={16}
                  />
                  <span>React</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">{t("aboutMe")}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("aboutDescription1")}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("aboutDescription2")}</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground mt-6">
                <div className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4 text-primary" />
                  <a href="mailto:alikuloff001@gmail.com" className="hover:text-primary">
                    alikuloff001@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-primary" />
                  <span>+9988-314-67-77</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-primary" />
                  <span>Uzbekistan</span>
                </div>
              </div>
            </div>

            <div id="skills" className="scroll-mt-20">
              <h3 className="text-xl font-semibold mb-6 relative inline-block">
                {t("skillsTitle")}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.span>
              </h3>
              <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border shadow-lg">
                <SkillsDisplay />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Creative design */}
        <section id="projects" className="py-12 scroll-mt-20 relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-2xl"></div>
          </div>

          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl relative inline-block">
              {t("projects")}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.span>
            </h2>
            <Link href="https://github.com/Alikuoff" target="_blank">
              <Button variant="outline" size="sm" className="gap-1 border-primary/20 hover:bg-primary/5">
                {t("viewAll")} <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl border shadow-lg p-6">
            <ProjectFilter />
          </div>
        </section>

        {/* Contact Section - Modern design */}
        <section id="contact" className="py-12 scroll-mt-20 relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>

          <motion.h2
            className="text-2xl font-bold tracking-tight sm:text-3xl mb-8 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("contactTitle")}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </motion.h2>

          {/* Let's work together button */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="https://t.me/@iamadzee" className="inline-flex">
              <Button
                size="lg"
                className="gap-2 text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  {t("letsWork")}
                </span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </a>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8 text-center bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t("contactDescription")}
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* First Column */}
              <div className="space-y-4">
                <a
                  href="mailto:alikuloff001@gmail.com"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-4 rounded-lg border bg-card/60 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
                >
                  <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 bg-card border-primary/30">
                    <MailIcon className="h-5 w-5" />
                  </Button>
                  <span className="overflow-hidden text-ellipsis">alikuloff001@gmail.com</span>
                </a>
                <a
                  href="tel:+99883146777"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-4 rounded-lg border bg-card/60 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
                >
                  <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 bg-card border-primary/30">
                    <PhoneIcon className="h-5 w-5" />
                  </Button>
                  <span>+9988-314-67-77</span>
                </a>
              </div>

              {/* Second Column */}
              <div className="space-y-4">
                <a
                  href="https://github.com/Alikuoff"
                  target="_blank"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-4 rounded-lg border bg-card/60 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
                  rel="noreferrer"
                >
                  <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 bg-card border-primary/30">
                    <GithubIcon className="h-5 w-5" />
                  </Button>
                  <span>github.com/Alikuoff</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/aziz-alikulov-a35755294/"
                  target="_blank"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-4 rounded-lg border bg-card/60 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
                  rel="noreferrer"
                >
                  <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 bg-card border-primary/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                  <span className="overflow-hidden text-ellipsis">linkedin.com/in/aziz-alikulov-a35755294</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <ScrollToTop />
      </main>

      {/* Footer - Modern design */}
      <footer className="border-t border-primary/10 bg-card/30 backdrop-blur-sm">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {t("copyright")}
            </motion.p>
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                { href: "https://github.com/Alikuoff", icon: <GithubIcon className="h-5 w-5" />, label: "GitHub" },
                {
                  href: "https://www.linkedin.com/in/aziz-alikulov-a35755294/",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  ),
                  label: "LinkedIn",
                },
                { href: "https://t.me/@iamadzee", icon: <MessageCircleIcon className="h-5 w-5" />, label: "Telegram" },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="text-muted-foreground hover:text-primary p-2 rounded-full bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors"
                  rel="noreferrer"
                >
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}

