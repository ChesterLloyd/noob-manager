import React from 'react'
import Client from '_components/Bootstrap/Client'

import 'bootstrap/dist/css/bootstrap.css'
// import '_components/globals.scss'

export const metadata = {
  title: 'Noob manager thing',
  description: 'Become a BOSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Client />
      </body>
    </html>
  )
}
