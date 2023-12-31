import './globals.css'
import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'

const notoJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guide Bot',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoJp.className}>{children}</body>
    </html>
  )
}
