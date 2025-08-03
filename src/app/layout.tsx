import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Green Match - Encuentra tu producto ecológico ideal',
  description: 'Descubre productos ecológicos personalizados para tu estilo de vida sostenible. Un cuestionario simple te ayudará a encontrar el producto perfecto para cuidar el planeta.',
  keywords: 'productos ecológicos, sostenible, eco-friendly, cuidado personal, cocina ecológica, ahorro energía',
  authors: [{ name: 'Green Match' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#4ade80',
  robots: 'index, follow',
  openGraph: {
    title: 'Green Match - Encuentra tu producto ecológico ideal',
    description: 'Descubre productos ecológicos personalizados para tu estilo de vida sostenible.',
    type: 'website',
    locale: 'es_ES',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#4ade80" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>{children}</body>
    </html>
  )
}