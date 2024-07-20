import { editorStore } from '@/stores/editorStore'
import { useStore } from '@tanstack/react-store'

export function useTheme() {
  const activeTheme = useStore(editorStore, (state) => state.activeTheme)
  const themes = useStore(editorStore, (state) => state.themes)
  return themes[activeTheme]
}
