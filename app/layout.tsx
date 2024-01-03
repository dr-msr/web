import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'drmsr.dev',
  description: 'developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

	function RenderDay() {
		const time = new Date();
		const currentHour = time.getHours();
	
		if (currentHour >= 6 && currentHour < 18) {
			return 'light'
		} else {
			return 'dark' 	}
	}
	
  return (
    <html lang="en" className={RenderDay()}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
