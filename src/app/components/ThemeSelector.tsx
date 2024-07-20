import { useEditor } from '@/hooks/useEditor'
import { updateTheme } from '@/stores/editorStore'
import clsx from 'clsx'

export const ThemeSelector = () => {
  const { themes, activeTheme } = useEditor()
  return (
    <div className={clsx('flex items-center justify-end', 'p-2 rounded-sm')}>
      <select
        className={clsx(
          'bg-slate-800 text-white p-2 rounded-md',
          'border-none outline-none',
          'cursor-pointer',
          'hover:bg-slate-500',
          'transition-colors duration-100 ease-in-out',
          'focus:outline-none focus:ring-0 focus:ring-offset-0'
        )}
        value={activeTheme}
        onChange={(e) => {
          updateTheme(e.target.value as keyof typeof themes)
        }}
      >
        {Object.keys(themes).map((theme) => (
          <option
            className={clsx(
              'bg-gray-200 p-2 rounded-md',
              'hover:bg-gray-300',
              'transition-colors duration-100 ease-in-out'
            )}
            key={theme}
            value={theme}
          >
            {theme}
          </option>
        ))}
      </select>
    </div>
  )
}
