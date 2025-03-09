import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Azizjon Alikulov | Web Developer",
  description: "Portfolio of Azizjon Alikulov, a web developer specializing in React, Next.js, and Node.js",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storageKey = 'theme';
                  var prefersDarkQuery = '(prefers-color-scheme: dark)';
                  var getStoredTheme = function() {
                    if (typeof localStorage !== 'undefined' && localStorage.getItem(storageKey)) {
                      return localStorage.getItem(storageKey);
                    }
                    return window.matchMedia(prefersDarkQuery).matches ? 'dark' : 'light';
                  };
                  
                  var theme = getStoredTheme();
                  var root = document.documentElement;
                  
                  if (theme === 'dark') {
                    root.classList.add('dark');
                  } else if (theme === 'light') {
                    root.classList.remove('dark');
                  } else if (theme === 'system') {
                    if (window.matchMedia(prefersDarkQuery).matches) {
                      root.classList.add('dark');
                    } else {
                      root.classList.remove('dark');
                    }
                  }
                } catch (e) {
                  console.error('Theme script error:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'