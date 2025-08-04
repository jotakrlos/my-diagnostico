import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App Diagnóstico Psicológico',
  description: 'Ferramenta para avaliar sintomas mentais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100`}>
        {children}
      </body>
    </html>
  )
}