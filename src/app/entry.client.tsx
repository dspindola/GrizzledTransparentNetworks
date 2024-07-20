import { App } from '@/app/main'
import { Route } from '@/app/routes'
import { hydrateRoot } from 'react-dom/client'

hydrateRoot(
  document.body,
  <App>
    <Route />
  </App>
)
