import './globals.css'
import TanstackProvider from '@/components/providers/TanstackProvider'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">

          <TanstackProvider>
          {children}
          </TanstackProvider>
        </main>
      </body>
    </html>
  )
}
