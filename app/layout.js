import './globals.css'

export const metadata = {
  title: 'ProHire HR Solution LLP - Professional Recruitment & HR Consulting',
  description: 'ProHire HR Solution LLP - Your trusted partner for recruitment and HR consulting services. Find the right talent for your business.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}