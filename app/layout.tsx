import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "GOATMONKY - The Ultimate PWA Experience",
    template: "%s | GOATMONKY",
  },
  description: "A powerful Progressive Web App that delivers native-like experiences across all platforms",
  keywords: ["PWA", "Progressive Web App", "GOATMONKY", "Mobile App", "Web App"],
  authors: [{ name: "GOATMONKY Team" }],
  creator: "GOATMONKY",
  publisher: "GOATMONKY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goatmonky.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goatmonky.vercel.app",
    title: "GOATMONKY - The Ultimate PWA Experience",
    description: "A powerful Progressive Web App that delivers native-like experiences across all platforms",
    siteName: "GOATMONKY",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GOATMONKY PWA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOATMONKY - The Ultimate PWA Experience",
    description: "A powerful Progressive Web App that delivers native-like experiences across all platforms",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#000000" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GOATMONKY",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="GOATMONKY" />
        <meta name="apple-mobile-web-app-title" content="GOATMONKY" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
