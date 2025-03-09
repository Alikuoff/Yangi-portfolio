"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Database, Layout, Server, Layers } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"
import { useMobileMenu } from "@/hooks/use-mobile"

// Function to handle image loading errors
const fallbackImageUrl = "/placeholder.svg?height=32&width=32"

export function SkillsDisplay() {
  const { t } = useLanguage()
  const isMobile = useMobileMenu()
  const [activeTab, setActiveTab] = useState("frontend")
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const skillCategories = [
    {
      id: "frontend",
      label: t("frontend"),
      icon: <Layout className="w-4 h-4 mr-2" />,
      skills: [
        {
          name: "React.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          link: "https://reactjs.org/",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          link: "https://nextjs.org/",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "HTML",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: "Sass",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          link: "https://sass-lang.com/",
        },
        {
          name: "Tailwind CSS",
          logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
          link: "https://tailwindcss.com/",
        },
        {
          name: "Bootstrap",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          link: "https://getbootstrap.com/",
        },
        {
          name: "Framer Motion",
          logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
          link: "https://www.framer.com/motion/",
        },
        {
          name: "Chart.js",
          logo: "https://www.chartjs.org/img/chartjs-logo.svg",
          link: "https://www.chartjs.org/",
        },
      ],
    },
    {
      id: "backend",
      label: t("backend"),
      icon: <Server className="w-4 h-4 mr-2" />,
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          link: "https://nodejs.org/",
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          link: "https://expressjs.com/",
        },
        {
          name: "REST API",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
          link: "https://restfulapi.net/",
        },
      ],
    },
    {
      id: "database",
      label: t("database"),
      icon: <Database className="w-4 h-4 mr-2" />,
      skills: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          link: "https://www.mysql.com/",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          link: "https://www.postgresql.org/",
        },
      ],
    },
    {
      id: "tools",
      label: t("tools"),
      icon: <Layers className="w-4 h-4 mr-2" />,
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          link: "https://git-scm.com/",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          link: "https://github.com/",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          link: "https://www.docker.com/",
        },
        {
          name: "Postman",
          logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
          link: "https://www.postman.com/",
        },
        {
          name: "tesseract.js",
          logo: "https://raw.githubusercontent.com/naptha/tesseract.js/master/docs/images/tesseract.png",
          link: "https://tesseract.projectnaptha.com/",
        },
        {
          name: "Lucide React",
          logo: "https://lucide.dev/logo.light.svg",
          link: "https://lucide.dev/",
        },
        {
          name: "Radix UI",
          logo: "https://avatars.githubusercontent.com/u/75042455",
          link: "https://www.radix-ui.com/",
        },
        {
          name: "shadcn/ui",
          logo: "https://ui.shadcn.com/apple-touch-icon.png",
          link: "https://ui.shadcn.com/",
        },
      ],
    },
  ]

  // Reset image errors when tab changes
  useEffect(() => {
    setImageErrors({})
  }, [activeTab])

  const handleImageError = (skillName: string) => {
    setImageErrors((prev) => ({ ...prev, [skillName]: true }))
  }

  const SkillGrid = ({ skills }: { skills: (typeof skillCategories)[0]["skills"] }) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {skills.map((skill, index) => (
        <motion.a
          key={index}
          href={skill.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="flex flex-col items-center justify-center p-3 bg-card/70 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all group"
        >
          <div className="w-10 h-10 flex items-center justify-center mb-2 relative bg-white rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all">
            <Image
              src={imageErrors[skill.name] ? fallbackImageUrl : skill.logo}
              alt={skill.name}
              width={32}
              height={32}
              className="object-contain group-hover:scale-110 transition-transform"
              onError={() => handleImageError(skill.name)}
            />
          </div>
          <span className="text-xs font-medium text-center line-clamp-1 group-hover:text-primary transition-colors">
            {skill.name}
          </span>
        </motion.a>
      ))}
    </div>
  )

  if (isMobile) {
    return (
      <div className="w-full space-y-6">
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className="w-full bg-card/80 backdrop-blur-sm border-primary/20">
            <SelectValue>
              <div className="flex items-center">
                {skillCategories.find((cat) => cat.id === activeTab)?.icon}
                {skillCategories.find((cat) => cat.id === activeTab)?.label}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="backdrop-blur-sm">
            {skillCategories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                <div className="flex items-center">
                  {category.icon}
                  {category.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {skillCategories.map(
          (category) =>
            activeTab === category.id && (
              <motion.div
                key={category.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <SkillGrid skills={category.skills} />
              </motion.div>
            ),
        )}
      </div>
    )
  }

  return (
    <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6 bg-card/70 backdrop-blur-sm border border-primary/10 p-1">
        {skillCategories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="flex items-center text-xs data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            {category.icon}
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {skillCategories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <SkillGrid skills={category.skills} />
        </TabsContent>
      ))}
    </Tabs>
  )
}

