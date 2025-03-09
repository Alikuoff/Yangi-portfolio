"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-6 bottom-6 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="icon"
            className="rounded-full shadow-lg h-12 w-12 bg-card/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

