// Simplified toast component
"use client"

import { createContext } from "react"

type ToastProps = {
  title?: string
  description?: string
  duration?: number
}

type ToastContextType = {
  toast: (props: ToastProps) => void
}

const ToastContext = createContext<ToastContextType>({
  toast: () => null,
})

export const toast = (props: ToastProps) => {
  // Create a simple toast notification that appears and disappears
  const toastElement = document.createElement("div")
  toastElement.classList.add(
    "fixed",
    "bottom-4",
    "right-4",
    "bg-card",
    "text-card-foreground",
    "p-4",
    "rounded-md",
    "shadow-lg",
    "border",
    "max-w-sm",
    "z-50",
    "animate-in",
    "fade-in",
    "slide-in-from-bottom-5",
  )

  const titleElement = document.createElement("h4")
  titleElement.classList.add("font-medium", "text-sm")
  titleElement.textContent = props.title || ""

  const descriptionElement = document.createElement("p")
  descriptionElement.classList.add("text-xs", "text-muted-foreground", "mt-1")
  descriptionElement.textContent = props.description || ""

  toastElement.appendChild(titleElement)
  toastElement.appendChild(descriptionElement)
  document.body.appendChild(toastElement)

  // Remove after duration
  setTimeout(() => {
    toastElement.classList.add("animate-out", "fade-out", "slide-out-to-right-5")
    setTimeout(() => {
      document.body.removeChild(toastElement)
    }, 300) // Animation duration
  }, props.duration || 3000)
}

export const useToast = () => {
  return { toast }
}

