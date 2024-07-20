import { ThemeSelector } from './ThemeSelector'
import clsx from 'clsx'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={clsx('absolute top-0 right-0 z-10')}>
        <ThemeSelector />
      </div>
      <div className={clsx('pt-16 flex flex-col h-screen')}>{children}</div>
    </>
  )
}
