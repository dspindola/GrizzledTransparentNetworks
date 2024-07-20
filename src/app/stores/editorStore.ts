import { themes } from '@/app/themes'
import { Store } from '@tanstack/react-store'

export const editorStore = new Store<{
  themes: typeof themes
  activeTheme: keyof typeof themes
}>({
  themes: themes,
  activeTheme: 'atom-dark'
})

export function updateTheme(theme: keyof typeof themes) {
  editorStore.setState((state) => ({
    ...state,
    activeTheme: theme
  }))
}
