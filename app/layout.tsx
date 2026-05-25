import React from "react"
import type { Metadata } from 'next'
import { Lato, Lobster } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: '--font-lato',
  display: 'swap',
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-lobster',
  display: 'swap',
});

const ethdown = localFont({
  src: '../public/Ethdown/OpenType-TT/Ethdown-Regular.ttf',
  variable: '--font-ethdown',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ETERNIA — Luxury Wedding Venue',
  description: 'Where timeless celebrations begin. Luxury wedding venue designed for elegance, romance, and unforgettable moments.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lobster&display=swap" rel="stylesheet" />
      </head>
      <body className={`${lato.variable} ${lobster.variable} ${ethdown.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
