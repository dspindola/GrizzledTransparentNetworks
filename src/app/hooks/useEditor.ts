import { editorStore } from '@/stores/editorStore'
import { useStore } from '@tanstack/react-store'

export function useEditor() {
  const editor = useStore(editorStore)
  return editor
}
