import { sandpack } from './sandpack.css.ts'
import { tailwind } from './tailwind.css.ts'
import clsx from 'clsx'
import React from 'react'

export function App({ children }: { children: React.ReactElement }) {
  return (
    <html lang='en'>
      <head>
        <title>app</title>
        <style>{sandpack}</style>
        <style>{tailwind}</style>
      </head>
      <body className={clsx('bg-black')}>{children}</body>
    </html>
  )
}
