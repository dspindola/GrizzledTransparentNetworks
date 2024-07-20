import { useTheme } from '@/hooks/useTheme'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole
} from '@codesandbox/sandpack-react'
import clsx from 'clsx'

export function Editor() {
  const theme = useTheme()
  return (
    <SandpackProvider
      theme={theme}
      template='node'
      className='h-full w-full flex flex-col'
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor className={clsx('w-3/4')} />
        <SandpackPreview className={clsx('w-1/4')} />
      </SandpackLayout>
      <SandpackConsole />
    </SandpackProvider>
  )
}
