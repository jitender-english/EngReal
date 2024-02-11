import './globals.css'

export const metadata = {
  title: 'EngReal - Learn English',
  description: 'Learn English Language',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="theme-dark">{children}</body>
    </html>
  )
}
