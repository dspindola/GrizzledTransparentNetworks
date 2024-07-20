import {
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackProvider
} from '@codesandbox/sandpack-react'

export const Route = () => (
  <SandpackProvider>
    <SandpackLayout>
      <SandpackFileExplorer />
      <SandpackCodeEditor />
      <SandpackPreview />
    </SandpackLayout>
  </SandpackProvider>
)
