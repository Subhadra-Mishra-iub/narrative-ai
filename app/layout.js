import './globals.css'
import { Session } from 'next-auth'
import { Inter } from 'next/font/google'
import AuthProvider from '@components/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children,session }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <AuthProvider session={session}>
      {children}
      </AuthProvider>
      </body>
    </html>
  )
}