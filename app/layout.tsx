
import type { Metadata } from 'next'
import { Ubuntu_Mono  } from 'next/font/google'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { useEffect, useState } from 'react'
import { useNavigation } from '@/lib/navi'

const inter = Ubuntu_Mono({ subsets: ['latin'], weight:['400'] })

export const metadata: Metadata = {
  title: 'drmsr.dev',
  description: 'developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

	function RenderDay() {
		const time = new Date();
		const currentHour = time.getHours();
	
		if (currentHour >= 6 && currentHour < 18) {
			return 'dark'
		} else {
			return 'dark' 	}
	}
	
  return (
    <html lang="en" className={'dark'}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
