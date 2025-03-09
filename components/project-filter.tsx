"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-context"

const projects = [
  {
    id: 1,
    title: "KriptoBozor",
    description: {
      en: "Cryptocurrency market tracking website",
      ru: "Сайт отслеживания криптовалютного рынка",
      uz: "Kriptovalyuta bozorini kuzatish veb-sayti",
    },
    content: {
      en: "A cryptocurrency market website built with Next.js 14, TypeScript, and CoinGecko API. Features interactive charts and market analysis tools.",
      ru: "Сайт криптовалютного рынка, созданный с использованием Next.js 14, TypeScript и CoinGecko API. Включает интерактивные графики и инструменты анализа рынка.",
      uz: "Next.js 14, TypeScript va CoinGecko API yordamida yaratilgan kriptovalyuta bozori veb-sayti. Interaktiv grafiklar va bozorni tahlil qilish vositalari mavjud.",
    },
    technologies: ["Next.js 14", "TypeScript", "Chart.js", "Tailwind"],
    category: "web",
    github: "https://github.com/Alikuoff",
    demo: "https://crpto-prices.netlify.app/",
    image: "https://fxmedia.s3.amazonaws.com/articles/rynok-kriptovalut.png",
  },
  {
    id: 2,
    title: "Medical Service Bot",
    description: {
      en: "Telegram bot for medical services",
      ru: "Телеграм-бот для медицинских услуг",
      uz: "Tibbiy xizmatlar uchun Telegram bot",
    },
    content: {
      en: "A Telegram bot that provides information about clinics and services, helps find the nearest and most affordable clinics based on user geolocation.",
      ru: "Телеграм-бот, предоставляющий информацию о клиниках и услугах, помогает найти ближайшие и наиболее доступные клиники на основе геолокации пользователя.",
      uz: "Klinikalar va xizmatlar haqida ma'lumot beruvchi, foydalanuvchi geolokatsiyasi asosida eng yaqin va arzon klinikalarni topishga yordam beruvchi Telegram bot.",
    },
    technologies: ["Node.js", "React.js", "PostgreSQL", "Docker"],
    category: "bot",
    github: "https://github.com/Alikuoff",
    demo: "https://t.me/@tibxizmat_bot",
    image: "https://kms-healthcare.com/wp-content/uploads/2023/10/ai-chatbots-in-healthcare-7-1024x575.png",
  },
  {
    id: 3,
    title: "FreePc Games",
    description: {
      en: "Free PC games platform",
      ru: "Платформа бесплатных PC игр",
      uz: "Bepul PC o'yinlari platformasi",
    },
    content: {
      en: "A platform built using Next.js 14 and FreeToGame API that allows users to search for and track free PC games with client-side storage for favorites.",
      ru: "Платформа, созданная с использованием Next.js 14 и FreeToGame API, которая позволяет пользователям искать и отслеживать бесплатные PC игры с хранением избранного на стороне клиента.",
      uz: "Next.js 14 va FreeToGame API yordamida yaratilgan, foydalanuvchilarga bepul PC o'yinlarini qidirish va kuzatib borish imkonini beruvchi, sevimli o'yinlarni mijoz tomonida saqlash imkoniyatiga ega platforma.",
    },
    technologies: ["Next.js 14", "TypeScript", "Tailwind", "shadcn/ui"],
    category: "web",
    github: "https://github.com/Alikuoff",
    demo: "https://free-pcgames.netlify.app/",
    image:
      "https://sjc.microlink.io/3_K3bbioZzMcvi62M3uPM1eHLqnhZv2x1GmxO_uKenB5j75EmnlVOBF_GvWHf-og-tvhjdriBE70gP4hCC7Qow.jpeg",
  },
  {
    id: 4,
    title: "AnimeHub",
    description: {
      en: "Anime information platform",
      ru: "Платформа информации об аниме",
      uz: "Anime ma'lumotlari platformasi",
    },
    content: {
      en: "AnimeHub is a platform built using Next.js, TypeScript, and Jikan API that enables users to search for and track their favorite anime.",
      ru: "AnimeHub - это платформа, созданная с использованием Next.js, TypeScript и Jikan API, которая позволяет пользователям искать и отслеживать их любимые аниме.",
      uz: "AnimeHub - Next.js, TypeScript va Jikan API yordamida yaratilgan, foydalanuvchilarga sevimli animelerini qidirish va kuzatib borish imkonini beruvchi platforma.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Jikan API"],
    category: "web",
    github: "https://github.com/Alikuoff",
    demo: "https://animehub-uz.netlify.app/",
    image:
      "https://manga-universe.fr/cdn/shop/articles/pourquoi-regarder-des-animes_1400x.progressive.png.jpg?v=1665494716",
  },
  {
    id: 5,
    title: "Car Number Detector",
    description: {
      en: "Automated car service system",
      ru: "Автоматизированная система обслуживания автомобилей",
      uz: "Avtomatlashtirilgan avtomobil xizmati tizimi",
    },
    content: {
      en: "An application that automates car service by detecting vehicle numbers and storing them in a database using tesseract.js and OpenSV library.",
      ru: "Приложение, автоматизирующее обслуживание автомобилей путем распознавания номеров транспортных средств и сохранения их в базе данных с использованием tesseract.js и библиотеки OpenSV.",
      uz: "Tesseract.js va OpenSV kutubxonasi yordamida avtomobil raqamlarini aniqlash va ularni ma'lumotlar bazasida saqlash orqali avtomobil xizmatini avtomatlashtiruvchi ilova.",
    },
    technologies: ["Node.js", "JavaScript", "PostgreSQL", "tesseract.js"],
    category: "app",
    github: "https://github.com/Alikuoff",
    demo: "",
    image: "https://blog.avotrix.com/wp-content/uploads/2020/11/ezgif.com-gif-maker.jpg",
  },
  {
    id: 6,
    title: "Makleroo",
    description: {
      en: "Personal website project",
      ru: "Проект персонального сайта",
      uz: "Shaxsiy veb-sayt loyihasi",
    },
    content: {
      en: "A personal project website created with HTML, CSS, SASS, JS, and Bootstrap. Currently in development.",
      ru: "Персональный проект сайта, созданный с использованием HTML, CSS, SASS, JS и Bootstrap. В настоящее время находится в разработке.",
      uz: "HTML, CSS, SASS, JS va Bootstrap yordamida yaratilgan shaxsiy loyiha veb-sayti. Hozirda ishlab chiqilmoqda.",
    },
    technologies: ["HTML", "CSS", "SASS", "Bootstrap"],
    category: "web",
    github: "https://github.com/Alikuoff",
    demo: "https://makleroo.uz",
    image:
      "https://real-estate-nigeria.beforward.jp/wp-content/uploads/2019/03/Buy-Rent-Sell-With-Be-Forward-Real-Estate.jpg",
  },
]

export function ProjectFilter() {
  const [filter, setFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const { language, t } = useLanguage()

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === filter))
    }
  }, [filter])

  const categories = [
    { id: "all", label: t("allProjects") },
    { id: "web", label: t("webApps") },
    { id: "app", label: t("applications") },
    { id: "bot", label: t("bots") },
  ]

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 p-2 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/10 shadow-sm">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.id)}
              className={`
              transition-all duration-300
              ${filter === category.id ? "bg-primary text-primary-foreground shadow-md" : "bg-card/50 border-primary/20 hover:border-primary/50"}
            `}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              layout
            >
              <div className="group relative overflow-hidden rounded-xl bg-card/70 backdrop-blur-sm border border-primary/10 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Project image with overlay */}
                <div className="h-56 bg-primary/5 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description[language as keyof typeof project.description] || project.description.en}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.content[language as keyof typeof project.content] || project.content.en}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-card/50 border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer actions */}
                <div className="p-4 border-t border-primary/10 flex justify-between items-center">
                  <Link href={project.github} target="_blank">
                    <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-primary">
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                  {project.demo ? (
                    <Link href={project.demo} target="_blank">
                      <Button size="sm" className="gap-1.5 relative overflow-hidden group">
                        <span className="relative z-10">
                          <ExternalLinkIcon className="h-4 w-4 mr-1 inline-block" />
                          {t("liveDemo")}
                        </span>
                        <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Button>
                    </Link>
                  ) : (
                    <Button size="sm" variant="outline" disabled className="opacity-60">
                      <ExternalLinkIcon className="h-4 w-4 mr-1" />
                      {t("comingSoon")}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

