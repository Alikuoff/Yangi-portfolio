"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = undefined // Placeholder for translation function

  // This prevents hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    toast({
      title: `Theme changed to ${newTheme === "system" ? "System preference" : newTheme}`,
      description: `Your preference has been saved.`,
      duration: 2000,
    })
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card/80 backdrop-blur-sm border border-primary/20">
        {[
          { theme: "light", icon: <Sun className="h-4 w-4" />, label: "Light" },
          { theme: "dark", icon: <Moon className="h-4 w-4" />, label: "Dark" },
          { theme: "system", icon: <Laptop className="h-4 w-4" />, label: "System" },
        ].map((item) => (
          <DropdownMenuItem
            key={item.theme}
            onClick={() => handleThemeChange(item.theme)}
            className="flex items-center gap-2 cursor-pointer hover:bg-primary/10"
          >
            {item.icon}
            <span>{t ? t(item.theme.toLowerCase()) : item.label}</span>
            {theme === item.theme && <span className="ml-auto text-primary text-xs">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

