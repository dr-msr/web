
import type { Metadata } from 'next'
import { Ubuntu_Mono  } from 'next/font/google'
import './globals.css'

const inter = Ubuntu_Mono({ subsets: ['latin'], weight:['400'] })

export const metadata: Metadata = {
  title: 'drmsr.dev',
  description: 'Dr. Mohd Syamirulah Bin Rahim',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={'dark'}>
      <body className={inter.className} style={{height:"100%"}}>
		{children}
	</body>
    </html>
  )
}
