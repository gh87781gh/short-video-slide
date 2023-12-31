import './globals.css'
import type { Metadata } from 'next'
import { StrictMode } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <StrictMode>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </StrictMode>
  )
}
