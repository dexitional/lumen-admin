import Provider from '@/components/Provider'
import './globals.css'

export const metadata = {
  title: 'LUMEN',
  description: 'LUMEN - Powerful initiative',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Tilt+Prism&family=Poppins&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-poppins">
      <Provider>
        {children}
      </Provider>
      </body>
    </html>
  )
}
